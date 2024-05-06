import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInfo } from './auth.interfaces';
import { SuccessResponse } from 'src/interfaces';

@Controller('auth')
export class AuthController {

  constructor(
    private _authService: AuthService
  ) {}

  @Post('/login')
  loginUser(@Body() { login }: LoginInfo): Promise<SuccessResponse> {
    return this._authService.getUser(login);
  }
}
