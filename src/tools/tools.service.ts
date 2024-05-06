import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { Socket } from 'net';
import { SocketMessageType, SuccessResponse } from 'src/interfaces';

@Injectable()
export class ToolsService {

  loadJSON(path: string): any {
    return JSON.parse(readFileSync(path, 'utf8'));
  }

  returnSuccess(message: string): SuccessResponse {
    return { message };
  }

  emitSocketMessage(client: Socket, type: SocketMessageType, message: any): void {
    client.emit('game', { type, message });
  };
}
