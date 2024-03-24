import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { DocFinancialsService } from './doc-financials.service';
import { CreateDocFinancialDto } from './dto/create-doc-financial.dto';
import { UpdateDocFinancialDto } from './dto/update-doc-financial.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
@Controller('doc-financials')
@ApiTags('Doc Financials')
@ApiBearerAuth()
export class DocFinancialsController {
  
  constructor(private readonly docFinancialsService: DocFinancialsService) {}

  @UseGuards(AuthGuard)
  @Roles('Doctor')
  @Get('ViewDocEarnings/:doctor_id')
  @ApiParam({ name: 'doctor_id', type: Number })
  @ApiResponse({ status: 200, description: 'Returns the earnings of a doctor' })
  showDocEarnings(@Param('doctor_id', ParseIntPipe) doctor_id: number) {
    return this.docFinancialsService.showDocEarnings(doctor_id);
  }

  @UseGuards(AuthGuard)
  @Roles('Doctor')
  @Get('ViewDocEarnings/:doctor_id/:startDate/:endDate')
  @ApiParam({ name: 'doctor_id', type: Number })
  @ApiParam({ name: 'startDate', type: String })
  @ApiParam({ name: 'endDate', type: String })
  @ApiResponse({ status: 200, description: 'Returns the earnings of a doctor within a specific date range' })
  async showDocEarningsByDate(
    @Param('doctor_id', ParseIntPipe) doctor_id: number,
    @Param('startDate') startDate: string,
    @Param('endDate') endDate: string
  ) {
    const earnings = await this.docFinancialsService.showDocEarningsByDate(doctor_id, startDate, endDate);
    return earnings;
  }

  @UseGuards(AuthGuard)
  @Roles('Doctor')
  @Get('ViewDocCommission/:doctor_id')
  @ApiParam({ name: 'doctor_id', type: Number })
  @ApiResponse({ status: 200, description: 'Returns the commissions of a doctor' })
  async findCommissions(@Param('doctor_id', ParseIntPipe) doctorId: number) {
    const commissions = await this.docFinancialsService.findCommissions(doctorId);
    return commissions;
  }

}
