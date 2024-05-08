import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { GameService } from './game.service';
import { Socket, Server } from "socket.io";
import { GameState } from './models';
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
    if(login && !alreadyConnected) {
      this.login = login;
      client.join("main");
    } else {
      client.emit('logout', '');
      client.disconnect();
    }
  }

  @SubscribeMessage('getGameState')
  async handleCharacterInfoMessage(client: Socket, msg: any): Promise<GameState> {
    return this._gameService.getGameState();
  }

  handleDisconnect(): void {
  }
}
