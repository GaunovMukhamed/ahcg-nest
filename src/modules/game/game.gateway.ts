import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { GameService } from './game.service';
import { Socket, Server } from "socket.io";
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
      console.log(this._gameService.players)
      // console.log((await this.server.in('main').fetchSockets()).length);
    } else {
      client.emit('logout', '');
      // client.destroy();
    }
  }

  @SubscribeMessage('characterInfo')
  async handleCharacterInfoMessage(client: Socket, { login, character }): Promise<void> {
    // client.emit('character', await this._gameService.getCharacterInfo(client, login, character));
  }

  handleDisconnect(): void {
    if(this.login) this._gameService.players = this._gameService.players.filter((login: string) => login !== this.login)
  }
}
