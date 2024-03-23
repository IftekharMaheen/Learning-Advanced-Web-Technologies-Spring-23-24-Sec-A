import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DocFinancialsService } from './doc-financials.service';
import { CreateDocFinancialDto } from './dto/create-doc-financial.dto';
import { UpdateDocFinancialDto } from './dto/update-doc-financial.dto';

@Controller('doc-financials')
export class DocFinancialsController {
  
  constructor(private readonly docFinancialsService: DocFinancialsService) {}

  @Get('ViewDocEarnings/:doctor_id')
  showDocEarnings(@Param('doctor_id', ParseIntPipe) doctor_id: number) {
    return this.docFinancialsService.showDocEarnings(doctor_id);
  }

  @Get('ViewDocEarnings/:doctor_id/:startDate/:endDate')
  async showDocEarningsByDate(
    @Param('doctor_id', ParseIntPipe) doctor_id: number,
    @Param('startDate') startDate: string,
    @Param('endDate') endDate: string
  ) {
    const earnings = await this.docFinancialsService.showDocEarningsByDate(doctor_id, startDate, endDate);
    return earnings;
  }

  @Get('ViewDocCommission/:doctor_id')
  async findCommissions(@Param('doctor_id', ParseIntPipe) doctorId: number) {
    const commissions = await this.docFinancialsService.findCommissions(doctorId);
    return commissions;
  }

}
