import { Character } from "./schemas/character.schema";

export interface GameState {
  allCharacters: Character[];
  gameState: 0|1|2; // started - true
  players: Players;
}

export interface Players {
  [key: string]: Player;
}

export class Player {
  character: Character | null = null;
  ready: boolean = false;
}