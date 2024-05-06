import { Socket } from "net";
import { Injectable } from "@nestjs/common";
import { InventoryItem, Rarity, WeaponType } from "src/interfaces";

@Injectable()
export class GameService {

  constructor(
    // private _characterService: CharactersService,
    // private _mapService: MapService,
  ) {}

  async inSuitableLocation(character: Character, locationName: string): Promise<boolean> {
    const currentLocation: MapObject | undefined = (await this._mapService.allMapObjects()).find((obj: MapObject) => obj.name === character.location);
    return !!(currentLocation && currentLocation.locations.find((loc: Location) => loc.name === locationName));
  }

  async getCharacterInfo(client: Socket, login: string, character: string): Promise<Character | undefined> {
    const foundCharacter: Character | undefined = await this._characterService.getCharacter(login, character)
    if(!foundCharacter) {
      client.emit('error', 'Персонажа не существует')
    }
    return foundCharacter;
  }

  async getMapObjects(): Promise<MapObject[]> {
    const objects: MapObject[] = await this._mapService.allMapObjects();
    return objects;
  }

  async updateCharacter(characterName: string, stats: CharacterFields): Promise<void> {
    this._characterService.updateCharacter(characterName, stats);
  }

  generateItem(type: WeaponType, rarity: Rarity, name: string, dmg?: number): string {
    const newItem: InventoryItem = {
      type,
      rarity,
      name,
      dmg,
    }
    return JSON.stringify(newItem);
  }
}