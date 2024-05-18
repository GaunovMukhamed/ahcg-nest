import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Character } from './schemas/character.schema';
import { Model } from 'mongoose';
import { CharacterDeckType, GameState, Player, Players } from './models';
import { ToolsService } from 'src/tools/tools.service';
import { Socket, Server } from "socket.io";
import { GameCard } from './schemas/game-card.schema';
import { Scenario } from './schemas/scenario.schema';
import { DodgerCard, KeeperCard, MysticCard, SeekerCard, SurvivorCard } from './schemas/deck.shemas';

@Injectable({ scope: Scope.TRANSIENT })
export class GameService {

  constructor(
    private _toolsService: ToolsService,
    @InjectModel(Character.name) private _characterModel: Model<Character>,
    @InjectModel(Scenario.name) private _scenarioModel: Model<Scenario>,
    @InjectModel(KeeperCard.name) private _keeperCardModel: Model<KeeperCard>,
    @InjectModel(SeekerCard.name) private _seekerCardModel: Model<SeekerCard>,
    @InjectModel(MysticCard.name) private _mysticCardModel: Model<MysticCard>,
    @InjectModel(SurvivorCard.name) private _survivorCardModel: Model<SurvivorCard>,
    @InjectModel(DodgerCard.name) private _dodgerCardModel: Model<DodgerCard>,
  ) {}
  
  gameState: 0|1|2 = 0; //1-выбор сценариев, 2-начало
  players: Players | {} = {};
  scenario: number = 0;

  characterTypeDecks: Map<CharacterDeckType, GameCard[]> = new Map();
  keeperDeck: GameCard[] = [];

  async getGameState(login: string, force: boolean = false): Promise<GameState> {
    if(this.gameState > 0 && !this.players[login] && force === false) {
      return {
        allCharacters: [],
        gameState: null,
        players: {}
      }
    }
    return {
      allCharacters: await this._characterModel.find({}).exec(),
      gameState: this.gameState,
      players: this.players
    }
  }

  async selectCharacter(client: Socket, server: Server, chId: number): Promise<any> {
    const login: string = getLogin(client);
    const character: Character | null = (await this._characterModel.find({ id: chId }).exec())[0]??null;
    //exist
    if(character) {
      //available
      const characterAvailable: boolean = !(Object.values(this.players).find((pl: Player) => pl.character && pl.character.id === chId));
      if(characterAvailable) {
        //update players
        this.players[login] = { character };
        server.to('main').emit('characterSelection', {
          newChId: chId,
          login
        });
      }
    }
  }

  async setPlayerReady(client: Socket, value: boolean, server: Server): Promise<void> {
    const login: string = getLogin(client);
    if(this.players[login]) {
      this.players[login].ready = value;
      //if all ready
      if(Object.values(this.players).every((pl: Player) => pl.ready === true)) {
        this.gameState = 1;
        Object.values(this.players)[0].isHost = true;
      }
      server.emit('gameState', await this.getGameState(login));
    }
  }

  async getScenarios(): Promise<Scenario[]> {
    return await this._scenarioModel.find({}).exec()
  }

  async applyScenario(client: Socket, server: Server, scenarioId: number): Promise<void> {
    this.scenario = scenarioId;
    this.gameState = 2;
    this.startGame();
    // server.emit('gameState', await this.getGameState(getLogin(client)));
  }

  private async startGame(): Promise<void> {
    await this._loadCharacterDeckTypes();
  }

  private async _loadCharacterDeckTypes(): Promise<void> {
    this.characterTypeDecks = new Map();
    const characterDeckTypesToLoad: Set<CharacterDeckType> = new Set<CharacterDeckType>();
    Object.values(this.players).map((pl: Player) => {
      pl.character.deckTypes.map((type: CharacterDeckType) => characterDeckTypesToLoad.add(type))
    });
    await Promise.all([...characterDeckTypesToLoad].map(async (deckToLoad: CharacterDeckType) => {
      switch(deckToLoad) {
        case 'keeper':
          this.characterTypeDecks.set('keeper', await this._keeperCardModel.find({}).exec());
          break;
        case 'seeker':
          this.characterTypeDecks.set('seeker', await this._seekerCardModel.find({}).exec());
          break;
        case 'mystic':
          this.characterTypeDecks.set('mystic', await this._mysticCardModel.find({}).exec());
          break;
        case 'survivor':
          this.characterTypeDecks.set('survivor', await this._survivorCardModel.find({}).exec());
          break;
        case 'dodger':
          this.characterTypeDecks.set('dodger', await this._dodgerCardModel.find({}).exec());
          break;
      }
    }))
    console.log(this.characterTypeDecks)
  }
}

const getLogin = (socket: Socket): string => {
  return socket['handshake']['headers']['authorization'];
}
