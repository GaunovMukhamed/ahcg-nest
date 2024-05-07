import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SuccessResponse } from 'src/interfaces';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToolsService } from 'src/tools/tools.service';
import { GameService } from '../game/game.service';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) private _userModel: Model<User>,
    private _toolsService: ToolsService,
    private _gameService: GameService
  ) {}

  async getUser(login: string): Promise<SuccessResponse> {
    const user: User[] = await this._userModel.find({ login }).exec();
    if(user.length > 0 && !this._gameService.players.includes(login)) {
      return this._toolsService.returnSuccess('Вы авторизованы');
    } else {
      throw new HttpException('Ошибка авторизации', HttpStatus.UNAUTHORIZED);
    }
  }
}
