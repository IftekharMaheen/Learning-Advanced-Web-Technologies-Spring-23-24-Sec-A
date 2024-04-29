import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeInfoService } from './employee-info.service';
import { CreateEmployeeInfoDto } from './dto/create-employee-info.dto';
import { UpdateEmployeeInfoDto } from './dto/update-employee-info.dto';

@Controller('employee-info')
export class EmployeeInfoController {
  constructor(private readonly employeeInfoService: EmployeeInfoService) {}

  @Get('EmployeeList')
  findAllEmployee() {
    return this.employeeInfoService.findAllEmployee();
  }

  @Post('AddEmployee')
  create(@Body() createEmployeeInfoDto: CreateEmployeeInfoDto) {
    return this.employeeInfoService.createEmployee(createEmployeeInfoDto);
  }

  @Patch('UpdateEmployee/:id')
  update(@Param('id') id: string, @Body() updateEmployeeInfoDto: UpdateEmployeeInfoDto) {
    return this.employeeInfoService.updateEmployee(+id, updateEmployeeInfoDto);
  }

  @Delete('RemoveEmployee/:id')
  removeEmployee(@Param('id') id: string) {
    return this.employeeInfoService.removeEmployee(+id);
  }
}
