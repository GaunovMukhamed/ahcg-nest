import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SuccessResponse } from 'src/interfaces';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToolsService } from 'src/tools/tools.service';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) private _userModel: Model<User>,
    private _toolsService: ToolsService
  ) {}

  async getUser(login: string): Promise<SuccessResponse> {
    const user: User[] = await this._userModel.find({ login }).exec();
    if(user.length > 0) {
      return this._toolsService.returnSuccess('Вы авторизованы');
    } else {
      throw new HttpException('Ошибка авторизации', HttpStatus.UNAUTHORIZED);
    }
  }
}
