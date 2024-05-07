import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Character } from './schemas/character.schema';
import { Model } from 'mongoose';
import { GameState } from './models';

@Injectable({ scope: Scope.TRANSIENT })
export class GameService {

  constructor(
    @InjectModel(Character.name) private _userModel: Model<Character>,
  ) {}
  
  status: boolean = false;
  players: string[] = [];

  async getGameState(): Promise<GameState> {
    return {
      allCharacters: await this._userModel.find({}).exec(),
      state: this.status
    }
  }
}
