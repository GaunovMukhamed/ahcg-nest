import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CharacterDeckType } from '../models';

export type UserDocument = HydratedDocument<Character>;

@Schema()
export class Character {
  @Prop({required: true})
  id: number;
  @Prop({required: true})
  name: string;
  @Prop({required: true})
  health: number;
  @Prop({required: true})
  mind: number;
  @Prop({required: true})
  agility: number;
  @Prop({required: true})
  intelligence: number;
  @Prop({required: true})
  strength: number;
  @Prop({required: true})
  will: number;
  @Prop({required: true})
  backImg: string;
  @Prop({required: true})
  frontImg: string;
  @Prop({required: true})
  miniImg: string;
  @Prop({required: true})
  deckTypes: CharacterDeckType[];
}

export const CharacterSchema = SchemaFactory.createForClass(Character);