import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { GameService } from './game.service';
import { Socket, Server } from "socket.io";
import { GameState } from './models';
@WebSocketGateway(3002, { cors: true })
export class GameGateway {

  constructor(
    private _gameService: GameService
  ) {}

  @WebSocketServer()
  server: Server;

  login: string | undefined;

  async handleConnection(client: Socket): Promise<void> {
    const login: string | null = client['handshake']['headers']['authorization'] ?? null;
    if(login && !this._gameService.players.includes(login)) {
      this.login = login;
      this._gameService.players.push(login);
      client.join("main");
    } else {
      client.emit('logout', '');
    }
  }

  @SubscribeMessage('getGameState')
  async handleCharacterInfoMessage(client: Socket, msg: any): Promise<GameState> {
    return this._gameService.getGameState();
  }

  handleDisconnect(): void {
    if(this.login) this._gameService.players = this._gameService.players.filter((login: string) => login !== this.login)
  }
}
