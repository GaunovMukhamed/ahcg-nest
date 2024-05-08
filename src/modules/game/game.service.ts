import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Character } from './schemas/character.schema';
import { Model } from 'mongoose';
import { GameState, Player, Players } from './models';
import { ToolsService } from 'src/tools/tools.service';
import { Socket, Server } from "socket.io";

@Injectable({ scope: Scope.TRANSIENT })
export class GameService {

  constructor(
    @InjectModel(Character.name) private _characterModel: Model<Character>,
    private _toolsService: ToolsService
  ) {}
  
  gameState: 0|1|2 = 0; //1-выбор сценариев, 2-начало
  players: Players | {} = {};

  async getGameState(): Promise<GameState> {
    return {
      allCharacters: await this._characterModel.find({}).exec(),
      gameState: this.gameState,
      players: this.players
    }
  }

  async selectCharacter(client: Socket, server: Server, chId: number): Promise<any> {
    const login: string = getLogin(client);
    const character: Character | null = (await this._characterModel.find({ id: chId }).exec())[0]??null;
    //exist
    if(character) {
      //available
      const characterAvailable: boolean = !(Object.values(this.players).find((pl: Player) => pl.character && pl.character.id === chId));
      if(characterAvailable) {
        //update players
        this.players[login] = { character };
        server.to('main').emit('characterSelection', {
          newChId: chId,
          login
        });
      }
    }
  }

  async setPlayerReady(client: Socket, value: boolean, server: Server): Promise<void> {
    if(this.players[getLogin(client)]) {
      this.players[getLogin(client)].ready = value;
      //if all ready
      if(Object.values(this.players).every((pl: Player) => pl.ready === true)) {
        this.gameState = 1;
        Object.values(this.players)[0].isHost = true;
      }
      server.emit('gameState', await this.getGameState());
    }
  }
}

const getLogin = (socket: Socket): string => {
  return socket['handshake']['headers']['authorization'];
}
