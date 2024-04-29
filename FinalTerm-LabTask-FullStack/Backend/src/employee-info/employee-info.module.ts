import { Module } from '@nestjs/common';
import { EmployeeInfoService } from './employee-info.service';
import { EmployeeInfoController } from './employee-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeInfo } from 'src/entities/employee-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeInfo])],
  controllers: [EmployeeInfoController],
  providers: [EmployeeInfoService],
})
export class EmployeeInfoModule {}
