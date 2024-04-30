import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { AuthGuard } from '../auth/guard/auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Post('CreateCustomer')
  create(@Body(ValidationPipe) createCustomerDto: CreateCustomerDto) {
    return this.customerService.createCustomer(createCustomerDto);
  }

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Get('Customers/Views')
  findAll() {
    return this.customerService.findAllCustomers();
  }

  @UseGuards(AuthGuard)
  @Roles('admin')  
  @Get('Customers/View/:customerId')
  findOnefindCustomerById(@Param('customerId') customerId:string) {
    return this.customerService.findCustomerById(+customerId);
  }

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Patch('Customers/Update/:customerId')
  updateCustomerInfo(@Param('customerId') customerId: string, @Body(ValidationPipe) updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.updateCustomerInfo(+customerId, updateCustomerDto);
  }

  @UseGuards(AuthGuard)
  @Roles('admin')
  @Delete('Customers/Remove/:customerId')
  removeCustomer(@Param('customerId') customerId: string) {
    return this.customerService.removeCustomer(+customerId);
  }
}
