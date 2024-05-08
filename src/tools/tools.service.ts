import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { Socket } from 'net';
import { ErrorResponse, SocketMessageType, SuccessResponse } from 'src/interfaces';

@Injectable()
export class ToolsService {

  loadJSON(path: string): any {
    return JSON.parse(readFileSync(path, 'utf8'));
  }

  returnSuccess(message: string): SuccessResponse {
    return { message };
  }

  returnError(message: string): ErrorResponse {
    return { error: message }
  }
}
