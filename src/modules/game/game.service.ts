import { Injectable, Scope } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Character } from './schemas/character.schema';
import { Model } from 'mongoose';
import { GameState, Player, Players } from './models';
import { ToolsService } from 'src/tools/tools.service';
import { Socket, Server } from "socket.io";
import { Scenario } from './schemas/scenario.schema';

@Injectable({ scope: Scope.TRANSIENT })
export class GameService {

  constructor(
    @InjectModel(Character.name) private _characterModel: Model<Character>,
    @InjectModel(Scenario.name) private _scenarioModel: Model<Scenario>,
    private _toolsService: ToolsService
  ) {}
  
  gameState: 0|1|2 = 0; //1-выбор сценариев, 2-начало
  players: Players | {} = {};
  scenario: number = 0;

  async getGameState(login: string, force: boolean = false): Promise<GameState> {
    return {
      allCharacters: await this._characterModel.find({}).exec(),
      gameState: (this.gameState > 0 && !this.players[login] && force === false) ? null : this.gameState,
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
    //prepare all cards for scenario
    this.gameState = 2;
    server.emit('gameState', await this.getGameState(getLogin(client)));
  }
}

const getLogin = (socket: Socket): string => {
  return socket['handshake']['headers']['authorization'];
}
