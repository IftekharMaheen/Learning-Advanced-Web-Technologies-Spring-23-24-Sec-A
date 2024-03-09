import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Repository } from 'typeorm';
import { Product } from 'src/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private readonly productRepo: Repository<Product>,
      ) {}
    
      async findAll() {
        //return this.users;
        return await this.productRepo.find({});
      }
    
      async findById(id: number) {
        //return this.users.find((user) => user.id === id);
        return await this.productRepo.find({ where: { id: id } });
      }
    
      async create(createProductDto: CreateProductDto) {    
        const product = await this.productRepo.create(createProductDto);
        return await this.productRepo.save(product);
      }
}
