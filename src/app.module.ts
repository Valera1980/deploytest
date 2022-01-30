import { FoodController } from './http/controller-one';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, FoodController],
  providers: [AppService],
})
export class AppModule {}
