import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { ScheduleMgtService } from './schedule-mgt.service';
import { CreateScheduleMgtDto } from './dto/create-schedule-mgt.dto';
import { UpdateScheduleMgtDto } from './dto/update-schedule-mgt.dto';

@Controller('schedule-mgt')
export class ScheduleMgtController {
  constructor(private readonly scheduleMgtService: ScheduleMgtService) {}

  @Post('CreateSchedule')
  create(@Body(ValidationPipe) createScheduleMgtDto: CreateScheduleMgtDto) {
    return this.scheduleMgtService.createRepository(createScheduleMgtDto);
  }

  @Get('ShowAllSchedule')
  findAll() {
    return this.scheduleMgtService.findAll();
  }

  @Get('ShowScheduleById/:schedule_id')
  findOne(@Param('schedule_id', ParseIntPipe) schedule_id: number) {
    return this.scheduleMgtService.findOne(schedule_id);
  }

  @Patch('UpdateSchedule/:schedule_id')
  update(@Param('schedule_id', ParseIntPipe) schedule_id: number, @Body(ValidationPipe) updateScheduleMgtDto: UpdateScheduleMgtDto) {
    return this.scheduleMgtService.update(schedule_id, updateScheduleMgtDto);
  }

  @Delete('DeleteSchedule/:schedule_id')
  async remove(@Param('schedule_id', ParseIntPipe) schedule_id: number) {
    await this.scheduleMgtService.remove(schedule_id);
  }
}
