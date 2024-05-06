import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'net';
import { GameService } from 'src/modules/game-module/game.service';

@WebSocketGateway(3002, { cors: true })
export class GameGateway {

  constructor(
    private _gameService: GameService
  ) {}

  game: Game | undefined;

  async handleConnection(client: Socket): Promise<void> {
    const authData: string[] | null = client['handshake']['headers']['authorization'].split(`~/`) ?? null;
    if(authData) {
      this.game = new Game(authData[0], authData[1], client, this._gameService);
    } else {
      client.destroy();
    }
  }

  @SubscribeMessage('characterInfo')
  async handleCharacterInfoMessage(client: Socket, { login, character }): Promise<void> {
    client.emit('character', await this._gameService.getCharacterInfo(client, login, character));
  }
  
  @SubscribeMessage('location')
  handleLocationMessage(client: Socket, payload: any): void {
    if(this._gameService.inSuitableLocation(this.game!.character, payload)) {
      client.emit('game', { type: 'location', message: payload });
    }
  }

  @SubscribeMessage('location/action')
  handleLocationActionMessage(client: Socket, payload: any): any {
    return this.game.processLocationAction(payload);
  }

  handleDisconnect(): void {
    this._gameService.updateCharacter(this.game!.character.name, this.game.character);
    clearInterval(this.game!.autosaveInterval);
  }
}
