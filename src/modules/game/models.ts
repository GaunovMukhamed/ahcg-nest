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

export type CharacterDeckType = 'common'|'keeper'|'seeker'|'mystic'|'survivor'|'dodger'|'special';

export type DeckBuilderInfo = {
  selectedCards: GameCard[];
  decks: {[key in CharacterDeckType]?: GameCard[]}
};

export interface SelectedPlayerCardInfo {
  id: number;
  type: CharacterDeckType
}

export type Slots = 'accessory'|'dress'|'hand'|'magic'|'ally'|'two-hand'|'two-magic';

export type CharacterAttributes = 'mind'|'agility'|'intelligence'|'strength'|'will'|'universal';

export type PlayerCardTags = 
  'доступ'|'предмет'|'оружие'|'рукопашное'|
  'инструмент'|'событие'|'запас'|'навык'|
  'прирожденный'|'приобретенный'|'реликвия'|'броня'|
  'союзник'|'мискатоник'|'книга'|'умение'|
  'проницательность'|'тактика'|'тренированный'|'огнестрельное'|
  'наука'|'полиция'|'существо'|'незаконный'|
  'преступник'|'фортуна'|'оберег'|'заклинание'|
  'дух'|'колдун'|'гуманоид'|'культист'|
  'монстр'|'упырь'|'элитный'|'охотник'|
  'мстительный'|'древний'|'большой';

export interface Act {
  name: string;
  actMemo: GameCard;
  contacts: GameCard[];
  locations: GameCard[];
}