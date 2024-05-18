import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { ToolsService } from 'src/tools/tools.service';
import { GameGateway } from './game.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './schemas/character.schema';
import { Scenario, ScenarioSchema } from './schemas/scenario.schema';
import { CommonCard, CommonSchema, DodgerCard, DodgerSchema, KeeperCard, KeeperSchema, MysticCard, MysticSchema, SeekerCard, SeekerSchema, SurvivorCard, SurvivorcSchema } from './schemas/deck.shemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Character.name, schema: CharacterSchema },
      { name: Scenario.name, schema: ScenarioSchema },
      { name: CommonCard.name, schema: CommonSchema, collection: 'commondeck' },
      { name: KeeperCard.name, schema: KeeperSchema, collection: 'keeperdeck' },
      { name: SeekerCard.name, schema: SeekerSchema, collection: 'seekerdeck' },
      { name: MysticCard.name, schema: MysticSchema, collection: 'mysticdeck' },
      { name: SurvivorCard.name, schema: SurvivorcSchema, collection: 'survivordeck' },
      { name: DodgerCard.name, schema: DodgerSchema, collection: 'dodgerdeck' },
    ])
  ],
  providers: [GameService, GameGateway, ToolsService],
  exports: [GameService]
})
export class GameModule {}
