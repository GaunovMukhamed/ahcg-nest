import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class GameService {
  
  status: boolean = false;
  players: string[] = [];

}
