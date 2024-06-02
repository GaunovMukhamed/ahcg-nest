import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CharacterAttributes, CharacterDeckType, PlayerCardTags, Slots } from '../models';

export type UserDocument = HydratedDocument<GameCard>;

@Schema()
export class GameCard {
  @Prop({required: true})
  id: number;
  @Prop({required: true})
  name: string;
  @Prop({required: true})
  type: CharacterDeckType;
  @Prop({required: true})
  frontImg: string;
  @Prop({required: true})
  backImg: string;
  @Prop({required: false})
  cost?: number;
  @Prop()
  level?: number;
  @Prop()
  slot?: Slots;
  @Prop()
  attributes?: CharacterAttributes[];
  @Prop()
  tags?: PlayerCardTags[];
  @Prop()
  health?: number;
  @Prop()
  mind?: number;
}

export const GameCardSchema = SchemaFactory.createForClass(GameCard);