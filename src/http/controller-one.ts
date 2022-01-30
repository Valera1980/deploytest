import { Controller, Get } from '@nestjs/common';

@Controller('food')
export class FoodController {
  @Get()
  find(): string {
    return 'New controller for foods';
  }
}
