import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { GameCard } from "./game-card.schema";

// character types
// common
@Schema() export class CommonCard extends GameCard {}
export const CommonSchema = SchemaFactory.createForClass(CommonCard);

// keeper
@Schema() export class KeeperCard extends GameCard {}
export const KeeperSchema = SchemaFactory.createForClass(KeeperCard);

// seeker
@Schema() export class SeekerCard extends GameCard {}
export const SeekerSchema = SchemaFactory.createForClass(SeekerCard);

// mystic
@Schema() export class MysticCard extends GameCard {}
export const MysticSchema = SchemaFactory.createForClass(MysticCard);

// survivor
@Schema() export class SurvivorCard extends GameCard {}
export const SurvivorcSchema = SchemaFactory.createForClass(SurvivorCard);

// dodger
@Schema() export class DodgerCard extends GameCard {}
export const DodgerSchema = SchemaFactory.createForClass(DodgerCard);