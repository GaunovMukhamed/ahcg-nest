import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<GameCard>;

@Schema()
export class GameCard {
  @Prop({required: true})
  id: number;
  @Prop({required: true})
  type: 'keeper';
  @Prop({required: true})
  frontImg: string;
  @Prop({required: true})
  backImg: string;
  @Prop()
  cost?: number;
  @Prop()
  level?: number;
}

export const GameCardSchema = SchemaFactory.createForClass(GameCard);