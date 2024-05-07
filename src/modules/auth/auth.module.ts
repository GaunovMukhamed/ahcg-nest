import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { ToolsService } from 'src/tools/tools.service';
import { GameService } from '../game/game.service';
import { GameModule } from '../game/game.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    GameModule
  ],
  providers: [AuthService, ToolsService],
  controllers: [AuthController]
})
export class AuthModule {}
