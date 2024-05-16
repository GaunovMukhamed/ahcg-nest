import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { GameService } from './game.service';
import { Socket, Server } from "socket.io";
import { GameState, Player } from './models';
import { Scenario } from './schemas/scenario.schema';
@WebSocketGateway(3002, { cors: true })
export class GameGateway {

  constructor(
    private _gameService: GameService
  ) {}

  @WebSocketServer() server: Server;

  login: string | undefined;

  async handleConnection(client: Socket): Promise<void> {
    const login: string | null = client['handshake']['headers']['authorization'] ?? null;
    const alreadyConnected: boolean = !!(await this.server.in('main').fetchSockets()).find((sk: any) => sk['handshake']['headers']['authorization'] === login);
    this.login = login;
    if(login && !alreadyConnected) {
      if(this._gameService.gameState === 0) {
        this._gameService.players[this.login] = new Player();
      }
      client.join("main");
    } else {
      client.emit('logout', '');
      client.disconnect();
    }
  }

  @SubscribeMessage('getGameState')
  async handleGetGameStateMessage(): Promise<GameState> {
    return this._gameService.getGameState(this.login);
  }

  @SubscribeMessage('selectCharacter')
  async handleSelectCharacterMessage(client: Socket, chId: number): Promise<void> {
    this._gameService.selectCharacter(client, this.server, chId);
  }

  @SubscribeMessage('setReady')
  async handleSetReadyMessage(client: Socket, value: boolean): Promise<void> {
    this._gameService.setPlayerReady(client, value, this.server);
  }

  @SubscribeMessage('getScenarios')
  async handleGetScenariosMessage(client: Socket): Promise<Scenario[]> {
    return this._gameService.getScenarios();
  }

  @SubscribeMessage('applyScenario')
  async handleapplyScenarioMessage(client: Socket, scenarioId: number): Promise<void> {
    this._gameService.applyScenario(client, this.server, scenarioId);
  }

  async handleDisconnect(): Promise<void> {
    if(this._gameService.gameState === 0) {
      delete this._gameService.players[this.login];
      this.server.to('main').emit('gameState', await this._gameService.getGameState(this.login, true));
    };
  }
}
