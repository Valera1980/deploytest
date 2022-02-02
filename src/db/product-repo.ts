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
  async create(model: Product): Promise<any> {
    const ddd = this._productRepo.create(model);
    return await this._productRepo.save(ddd);
  }
}
