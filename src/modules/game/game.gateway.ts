import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { GameService } from './game.service';
import { Socket } from 'net';

@WebSocketGateway(3002, { cors: true })
export class GameGateway {

  constructor(
    private _gameService: GameService
  ) {}

  login: string | undefined;

  async handleConnection(client: Socket): Promise<void> {
    const login: string | null = client['handshake']['headers']['authorization'] ?? null;
    if(login && !this._gameService.players.includes(login)) {
      this.login = login;
      this._gameService.players.push(login);
    } else {
      client.emit('character', '');
      client.destroy();
    }
  }

  @SubscribeMessage('characterInfo')
  async handleCharacterInfoMessage(client: Socket, { login, character }): Promise<void> {
    // client.emit('character', await this._gameService.getCharacterInfo(client, login, character));
  }

  handleDisconnect(): void {
    this._gameService.players = this._gameService.players.filter((login: string) => login !== this.login)
  }
}
