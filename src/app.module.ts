import { ProductService } from './db/product-repo';
import { FoodController } from './http/controller-one';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './db/product-entity';
import { getConnectionOptions } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
          url: process.env.TYPEORM_URL,
        }),
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, FoodController],
  providers: [AppService, ProductService],
})
export class AppModule {}
