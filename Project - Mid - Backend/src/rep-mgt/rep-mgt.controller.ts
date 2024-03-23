import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { RepMgtService } from './rep-mgt.service';
import { CreateRepListDto } from './dto/create-rep-list.dto';
import { UpdateRepListDto } from './dto/update-rep-list.dto';
import { CreateRepAppDto } from './dto/create-rep-app.dto';
import { UpdateRepAppDto } from './dto/update-rep-app.dto';

@Controller('rep-mgt')
export class RepMgtController {
  constructor(private readonly repMgtService: RepMgtService) {}

  @Post('AddRep')
  addRep(@Body(ValidationPipe) createRepListDto: CreateRepListDto) {
    return this.repMgtService.addRep(createRepListDto);
  }

  @Get('SearchRep/:rep_id')
  findOne(@Param('rep_id', ParseIntPipe) rep_id: number) {
    return this.repMgtService.findOne(rep_id);
  }

  @Patch('UpdateRep/:rep_id')
  update(@Param('rep_id', ParseIntPipe) rep_id: number, @Body(ValidationPipe) updateRepListDto: UpdateRepListDto) {
    return this.repMgtService.updateRep(rep_id, updateRepListDto);
  }

  @Post('AddRepAppointment')
  addRepAppointment(@Body(ValidationPipe) createRepAppDto: CreateRepAppDto) {
    return this.repMgtService.addRepAppointment(createRepAppDto);
  }

  @Get('SearchRepAppointment/:rep_app_id')
  findOneRepAppointment(@Param('rep_app_id', ParseIntPipe) rep_app_id: number) {
    return this.repMgtService.findAppointment(rep_app_id);
  }

  @Get('ViewRepAppointments/:doc_id')
  async getRepAppointments(@Param('doc_id', ParseIntPipe) doc_id: number) {
    const appointments = await this.repMgtService.getRepAppointments(doc_id);
    return appointments;
  }

  @Patch('UpdateRepAppointment/:rep_app_id')
  updateRepAppointment(@Param('rep_app_id', ParseIntPipe) rep_app_id: number, @Body(ValidationPipe) updateRepAppDto: UpdateRepAppDto) {
    return this.repMgtService.updateRepAppointment(rep_app_id, updateRepAppDto);
  }

}
