import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  
  status: boolean = false;
  players: string[] = [];

}
