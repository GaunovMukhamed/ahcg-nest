import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { GameService } from './game.service';
import { Socket, Server } from "socket.io";
import { DeckBuilderInfo, GameState, Player, SelectedPlayerCardInfo } from './models';
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
    try {
      this._gameService.selectCharacter(client, this.server, chId);
    } catch {
      client.emit('error', 'Ошибка при выборе персонажа')
    }
  }

  @SubscribeMessage('setReady')
  async handleSetReadyMessage(client: Socket, value: boolean): Promise<void> {
    try {
      this._gameService.setPlayerReady(client, value, this.server);
    } catch {
      client.emit('error', 'Ошибка')
    }
  }

  @SubscribeMessage('getScenarios')
  async handleGetScenariosMessage(client: Socket): Promise<Scenario[]> {
    try {
      return this._gameService.getScenarios();
    } catch {
      client.emit('error', 'Ошибка при получении сценариев')
      return [];
    }
  }

  @SubscribeMessage('applyScenario')
  async handleApplyScenarioMessage(client: Socket, scenarioId: number): Promise<void> {
    try {
      this._gameService.applyScenario(client, this.server, scenarioId);
    } catch {
      client.emit('error', 'Ошибка при выборе сценария')
    }
  }

  @SubscribeMessage('getDeckBuilderCards')
  handleGetDeckBuilderCardsMessage(client: Socket): DeckBuilderInfo {
    try {
      return this._gameService.getDeckBuilderInfo(client);
    } catch  {
      client.emit('error', 'Ошибка при получении наборов карт')
      return { selectedCards: [], decks: {} }
    }
  }

  @SubscribeMessage('cardsSelection')
  async handleCardsSelectionMessage(client: Socket, selectedCardsInfo: SelectedPlayerCardInfo[]): Promise<void> {
    try {
      this._gameService.setPlayerSelectedCards(client, selectedCardsInfo);
    } catch {
      client.emit('error', 'Ошибка при формировании вашей колоды')
    }
  }

  async handleDisconnect(): Promise<void> {
    if(this._gameService.gameState === 0) {
      delete this._gameService.players[this.login];
      this.server.to('main').emit('gameState', await this._gameService.getGameState(this.login, true));
    };
  }
}
