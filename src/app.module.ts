import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToolsService } from './tools/tools.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GameModule } from './modules/game-module/game.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot('mongodb://192.168.1.34:27017/data'),
    GameModule
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    ToolsService,
  ],
})
export class AppModule {}
