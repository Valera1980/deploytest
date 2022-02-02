import { Controller, Get, Param, Post } from '@nestjs/common';
import { Product } from 'src/db/product-entity';
import { ProductService } from 'src/db/product-repo';

@Controller('food')
export class FoodController {
  constructor(private _product: ProductService) {}
  // @Get(':id')
  // findById(@Param('id') id: string): string {
  //   return 'New entity found with ' + id;
  // }
  @Get('/all')
  async find(): Promise<Product[]> {
    const products = await this._product.findAll();
    return products;
  }
  @Post()
  async create(): Promise<any> {
    const ppp = await this._product.create(new Product('aaa', 120, 'oooo'));
    console.log(ppp);
    return 'Instance is created';
  }
}
