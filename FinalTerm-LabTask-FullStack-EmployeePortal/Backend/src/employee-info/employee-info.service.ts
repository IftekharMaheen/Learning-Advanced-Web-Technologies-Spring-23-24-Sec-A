import { Injectable } from '@nestjs/common';
import { CreateEmployeeInfoDto } from './dto/create-employee-info.dto';
import { UpdateEmployeeInfoDto } from './dto/update-employee-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeInfo } from 'src/entities/employee-info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeInfoService {

  constructor(
    @InjectRepository(EmployeeInfo)
    private employeeInfoRepository: Repository<EmployeeInfo>,
  ) {}

  async findAllEmployee() {
    const employeeInfo = await this.employeeInfoRepository.find();
    return employeeInfo;
  }

  async findEmployeeById(employee_id: number) {
    const employeeInfo = await this.employeeInfoRepository.findOne({where: {employee_id: employee_id}});
    return employeeInfo;
  }

  async createEmployee(createEmployeeInfoDto: CreateEmployeeInfoDto) {
    const employeeInfo = this.employeeInfoRepository.create(createEmployeeInfoDto);
    return await this.employeeInfoRepository.save(employeeInfo);
  }

  async updateEmployee(employee_id: number, updateEmployeeInfoDto: UpdateEmployeeInfoDto) {
    const employeeInfo = await this.employeeInfoRepository.findOne({where: {employee_id: employee_id}});
    return await this.employeeInfoRepository.update(+employee_id, updateEmployeeInfoDto);;
  }

  async removeEmployee(employee_id: number) {
    const employeeInfo = await this.findEmployeeById(employee_id);
    if(!employeeInfo){
      return undefined;
    }
    else{
      return this.employeeInfoRepository.remove(employeeInfo);
    }
  }
}
