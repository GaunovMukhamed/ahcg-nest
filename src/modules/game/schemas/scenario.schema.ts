import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Scenario>;

@Schema()
export class Scenario {
  @Prop({required: true})
  id: number;
  @Prop({required: true})
  name: string;
}

export const ScenarioSchema = SchemaFactory.createForClass(Scenario);

