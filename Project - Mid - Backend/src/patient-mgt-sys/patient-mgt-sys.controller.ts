import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { PatientMgtSysService } from './patient-mgt-sys.service';
import { CreatePatientPrescriptionDto } from './dto/create-patient-prescription.dto';
import { UpdatePatientMgtSyDto } from './dto/update-patient-mgt-sy.dto';

@Controller('patient-mgt-sys')
export class PatientMgtSysController {
  constructor(private readonly patientMgtSysService: PatientMgtSysService) {}

  @Post('CreatePrescription')
  createPrescription(@Body(ValidationPipe) createPatientPrescriptionDto: CreatePatientPrescriptionDto) {
    return this.patientMgtSysService.createPrescription(createPatientPrescriptionDto);
  }

  @Get()
  findAll() {
    return this.patientMgtSysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientMgtSysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientMgtSyDto: UpdatePatientMgtSyDto) {
    return this.patientMgtSysService.update(+id, updatePatientMgtSyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientMgtSysService.remove(+id);
  }
}
