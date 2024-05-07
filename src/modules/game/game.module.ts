import { Global, Module } from '@nestjs/common';
import { GameService } from './game.service';
import { ToolsService } from 'src/tools/tools.service';
import { GameGateway } from './game.gateway';

@Global()
@Module({
  imports: [
    // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  providers: [GameService, GameGateway, ToolsService],
  controllers: []
})
export class GameModule {}
