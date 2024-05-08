import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { ToolsService } from 'src/tools/tools.service';
import { GameGateway } from './game.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './schemas/character.schema';
import { Scenario, ScenarioSchema } from './schemas/scenario.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Character.name, schema: CharacterSchema }]),
    MongooseModule.forFeature([{ name: Scenario.name, schema: ScenarioSchema }])
  ],
  providers: [GameService, GameGateway, ToolsService],
  exports: [GameService]
})
export class GameModule {}
