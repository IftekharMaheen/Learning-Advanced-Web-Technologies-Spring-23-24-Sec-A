import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { PatientMgtSysService } from './patient-mgt-sys.service';
import { CreatePatientPrescriptionDto } from './dto/create-patient-prescription.dto';

@Controller('patient-mgt-sys')
export class PatientMgtSysController {
  constructor(private readonly patientMgtSysService: PatientMgtSysService) {}

  @Post('CreatePrescription')
  createPrescription(@Body(ValidationPipe) createPatientPrescriptionDto: CreatePatientPrescriptionDto) {
    return this.patientMgtSysService.createPrescription(createPatientPrescriptionDto);
  }

  @Get('ViewAppointments/:doctor_id')
  async getAppointments(@Param('doctor_id', ParseIntPipe) doctorId: number) {
    const appointments = await this.patientMgtSysService.getAppointments(doctorId);
    return appointments;
  }
}
