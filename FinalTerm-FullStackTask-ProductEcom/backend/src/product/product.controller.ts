import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/guard/auth.guard';
import { Roles } from 'src/decorators/roles.decorator';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Post('AddProduct')
  createProduct(@Body(ValidationPipe) createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @UseGuards(AuthGuard)
  @Roles('admin', 'customer')
  @Get('ViewProducts')
  findAllProducts() {
    return this.productService.findAllProducts();
  }

  @UseGuards(AuthGuard)
  @Roles('admin', 'customer')
  @Get('ViewProducts/:productId')
  findParticularProduct(@Param('productId') productId: string) {
    return this.productService.findParticularProduct(+productId);
  }

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Patch('UpdateProduct/:id')
  updateProductInfo(@Param('productId') productId: string, @Body(ValidationPipe) updateProductDto: UpdateProductDto) {
    return this.productService.updateProductInfo(+productId, updateProductDto);
  }

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Delete('DeleteProduct/:productId')
  removeProduct(@Param('productId') productId: string) {
    return this.productService.removeProduct(+productId);
  }
}
