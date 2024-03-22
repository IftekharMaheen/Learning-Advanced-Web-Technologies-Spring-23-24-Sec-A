import { Injectable } from '@nestjs/common';
import { CreatePatientPrescriptionDto } from './dto/create-patient-prescription.dto';
import { UpdatePatientMgtSyDto } from './dto/update-patient-mgt-sy.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PatientPrescription } from 'src/entities/patient-prescription.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientMgtSysService {
  
  constructor(
    @InjectRepository(PatientPrescription)
    private patientPrescriptionRepository: Repository<PatientPrescription>,
  ) {}
  
  async createPrescription(createPatientPrescriptionDto: CreatePatientPrescriptionDto) {
    const prescriptionData = await this.patientPrescriptionRepository.create(createPatientPrescriptionDto);
    return await this.patientPrescriptionRepository.save(prescriptionData);
  }

  findAll() {
    return `This action returns all patientMgtSys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientMgtSy`;
  }

  update(id: number, updatePatientMgtSyDto: UpdatePatientMgtSyDto) {
    return `This action updates a #${id} patientMgtSy`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientMgtSy`;
  }

}
