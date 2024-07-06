import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Act } from '../models';
import { GameCard } from './game-card.schema';

export type UserDocument = HydratedDocument<Scenario>;

@Schema()
export class Scenario {
  @Prop({required: true})
  id: number;
  @Prop({required: true})
  name: string;
  @Prop({required: true})
  acts: Act[];
  @Prop({required: true})
  specialCards: GameCard[];
  @Prop({required: true})
  contacts: {[key:string]: GameCard[]}
}

export const ScenarioSchema = SchemaFactory.createForClass(Scenario);

