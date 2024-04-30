import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
  
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) { }

  async createProduct(createProductDto: CreateProductDto) {
    const productData = this.productRepository.create(createProductDto);
    return await this.productRepository.save(productData);
  }

  async findAllProducts() {
    return await this.productRepository.find();
  }

  async findParticularProduct(productId: number): Promise<Product| undefined> {
    const productInfo = await this.productRepository.findOne({where: {productId : productId}});
  
    if (!productInfo) {
      return undefined;
    }
    else {
      return productInfo;
    }
  }

  async updateProductInfo(productId: number, updateProductDto: UpdateProductDto) {
    return await this.productRepository.update(productId, updateProductDto);
  }

  async removeProduct(productId: number) {
    const productRemoveResponse = await this.productRepository.findOne({where: {productId : productId}});
    console.log(`Product ID #${productId} is removed successfully.`);
    return this.productRepository.remove(productRemoveResponse);
  }
}
