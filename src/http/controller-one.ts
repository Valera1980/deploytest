import { Controller, Get, Post } from '@nestjs/common';

@Controller('food')
export class FoodController {
  @Get()
  find(): string {
    return 'New controller for foods';
  }
  @Post()
  create(): string {
    return 'Instance is created';
  }
}
