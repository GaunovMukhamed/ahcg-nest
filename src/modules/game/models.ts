import { Character } from "./schemas/character.schema";

export interface GameState {
  allCharacters: Character[];
  gameStarted: boolean; // started - true
  players: Players;
}

export interface Players {
  [key: string]: Player;
}

export class Player {
  character: Character | null = null;
}