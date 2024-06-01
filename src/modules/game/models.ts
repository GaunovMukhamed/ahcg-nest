import { Character } from "./schemas/character.schema";
import { GameCard } from "./schemas/game-card.schema";

export interface GameState {
  allCharacters: Character[];
  gameState: GameStage;
  players: Players;
}

export type GameStage = 0|1|2|3; //1-выбор сценариея, 2-набор колод, 3-старт

export interface Players {
  [key: string]: Player;
}

export class Player {
  character: Character | null = null;
  ready: boolean = false;
  isHost: boolean = false;
  playerDeck: GameCard[] = [];
  allDecks: {[key in CharacterDeckType]?: GameCard[]} = { common: [] };
}

export type CharacterDeckType = 'common'|'keeper'|'seeker'|'mystic'|'survivor'|'dodger';

export type DeckBuilderInfo = {
  selectedCards: GameCard[];
  decks: {[key in CharacterDeckType]?: GameCard[]}
};

export interface SelectedPlayerCardInfo {
  id: number;
  type: CharacterDeckType
}