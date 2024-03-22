import { Module } from '@nestjs/common';
import { PatientMgtSysService } from './patient-mgt-sys.service';
import { PatientMgtSysController } from './patient-mgt-sys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientPrescription } from 'src/entities/patient-prescription.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PatientPrescription])],
  controllers: [PatientMgtSysController],
  providers: [PatientMgtSysService],
})
export class PatientMgtSysModule {}
