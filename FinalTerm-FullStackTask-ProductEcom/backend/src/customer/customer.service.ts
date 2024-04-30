import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}
  
  async createCustomer(createCustomerDto: CreateCustomerDto) {
    const customer = this.customerRepository.create(createCustomerDto);
    console.log(`Successfully created customer`);
    return await this.customerRepository.save(customer);
  }

  async findAllCustomers() {
    return await this.customerRepository.find();
  }

  async findCustomerById(customerId: number): Promise<Customer | undefined> {
    const customerInfo = await this.customerRepository.findOne({where: {customerId: customerId}});
    
    if(!customerInfo){
      console.log(`Failed to find customer #${customerId}`);
      return undefined;
    }

    else{
      console.log(`Successfully found customer #${customerId}`);
      return customerInfo;
    }
  }

  async updateCustomerInfo(customerId: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerRepository.findOne({where: {customerId: customerId}});
    
    if(!customer){
      console.log(`Failed to update customer #${customerId}`);
      return undefined;
    }

    else{
      console.log(`Successfully updated customer #${customerId}`);
      return await this.customerRepository.update(customerId, updateCustomerDto);
    }
  }

  async removeCustomer(customerId: number) {
    const customer = await this.customerRepository.findOne({where: {customerId: customerId}});

    if(!customer){
      console.log(`Failed to remove customer #${customerId}`);
      return undefined;
    }

    else{
      console.log(`Successfully removed customer #${customerId}`);
      return await this.customerRepository.remove(customer);
    }
  }
}
