import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { GameService } from './game.service';
import { Socket } from 'net';

@WebSocketGateway(3002, { cors: true })
export class GameGateway {

  constructor(
    private _gameService: GameService
  ) {}

  async handleConnection(client: Socket): Promise<void> {
    console.log('connected')
    // const authData: string[] | null = client['handshake']['headers']['authorization'].split(`~/`) ?? null;
    // if(authData) {
    //   this.game = new Game(authData[0], authData[1], client, this._gameService);
    // } else {
    //   client.destroy();
    // }
  }

  @SubscribeMessage('characterInfo')
  async handleCharacterInfoMessage(client: Socket, { login, character }): Promise<void> {
    // client.emit('character', await this._gameService.getCharacterInfo(client, login, character));
  }

  handleDisconnect(): void {
    // this._gameService.updateCharacter(this.game!.character.name, this.game.character);
    // clearInterval(this.game!.autosaveInterval);
  }
}
