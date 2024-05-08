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
  
  gameStarted: boolean = false;
  players: Players | {} = {};

  async getGameState(): Promise<GameState> {
    return {
      allCharacters: await this._characterModel.find({}).exec(),
      gameStarted: this.gameStarted,
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
}

const getLogin = (socket: Socket): string => {
  return socket['handshake']['headers']['authorization'];
}
