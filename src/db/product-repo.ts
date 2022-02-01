import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product-entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private _productRepo: Repository<Product>,
  ) {}
  findAll(): Promise<Product[]> {
    return this._productRepo.find();
  }
}
