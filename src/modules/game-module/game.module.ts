import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { ToolsService } from 'src/tools/tools.service';
import { GameGateway } from './game.gateway';

@Module({
  imports: [],
  providers: [GameService, ToolsService, GameGateway]
})
export class GameModule {}
