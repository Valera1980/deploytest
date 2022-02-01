import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from 'src/db/product-repo';

@Controller('food')
export class FoodController {
  constructor(private _product: ProductService) {}
  // @Get(':id')
  // findById(@Param('id') id: string): string {
  //   return 'New entity found with ' + id;
  // }
  @Get('/all')
  async find(): Promise<number> {
    const users = await this._product.findAll();
    return users.length;
  }
  @Post()
  create(): string {
    return 'Instance is created';
  }
}
