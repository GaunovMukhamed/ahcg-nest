import { Character } from "./schemas/character.schema";

export interface GameState {
  allCharacters: Character[];
  state: boolean; // started - true
}