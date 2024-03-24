import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { PatientMgtSysService } from './patient-mgt-sys.service';
import { CreatePatientPrescriptionDto } from './dto/create-patient-prescription.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
@Controller('patient-mgt-sys')
@ApiTags('Patient Management System')
@ApiBearerAuth()
export class PatientMgtSysController {
  constructor(private readonly patientMgtSysService: PatientMgtSysService) {}

  @UseGuards(AuthGuard)
  @Roles('Doctor')
  @Post('CreatePrescription')
  @ApiBody({ type: CreatePatientPrescriptionDto })
  @ApiResponse({ status: 201, description: 'Prescription created successfully' })
  createPrescription(@Body(ValidationPipe) createPatientPrescriptionDto: CreatePatientPrescriptionDto) {
    return this.patientMgtSysService.createPrescription(createPatientPrescriptionDto);
  }

  @UseGuards(AuthGuard)
  @Roles('Doctor, Staff')
  @Get('ViewAppointments/:doctor_id')
  @ApiParam({ name: 'doctor_id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Appointments retrieved successfully' })
  async getAppointments(@Param('doctor_id', ParseIntPipe) doctorId: number) {
    const appointments = await this.patientMgtSysService.getAppointments(doctorId);
    return appointments;
  }
}
