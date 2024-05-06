export interface SuccessResponse {
  message: string;
}
export interface ErrorResponse extends SuccessResponse {};
export type SocketMessageType = 'map'|'character'|'notification';
export type MapObjectType = 'город'|'место';

export type WeaponType = 'dagger'|'sword'|'axe';
export type Rarity = 'common'|'uncommon'|'rare'|'epic'|'legendary';

export interface InventoryItem {
  type: WeaponType;
  rarity: Rarity;
  name: string;
  dmg?: number;
}