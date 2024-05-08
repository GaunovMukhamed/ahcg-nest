export interface SuccessResponse {
  message: string;
}
export interface ErrorResponse {
  error: string;
};
export type SocketMessageType = 'characterSelection';
export type MapObjectType = 'город'|'место';

export type WeaponType = 'dagger'|'sword'|'axe';
export type Rarity = 'common'|'uncommon'|'rare'|'epic'|'legendary';

export interface InventoryItem {
  type: WeaponType;
  rarity: Rarity;
  name: string;
  dmg?: number;
}