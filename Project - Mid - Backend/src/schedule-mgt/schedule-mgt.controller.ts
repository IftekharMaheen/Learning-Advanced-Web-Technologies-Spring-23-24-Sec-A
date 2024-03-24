import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ScheduleMgtService } from './schedule-mgt.service';
import { CreateScheduleMgtDto } from './dto/create-schedule-mgt.dto';
import { UpdateScheduleMgtDto } from './dto/update-schedule-mgt.dto';
import { Roles } from 'src/auth/roles.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiTags, ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiNotFoundResponse, ApiBadRequestResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
@Controller('schedule-mgt')
@ApiTags('Schedule Management')
@ApiBearerAuth()
export class ScheduleMgtController {
  constructor(private readonly scheduleMgtService: ScheduleMgtService) {}

  @UseGuards(AuthGuard)
  @Roles('Doctor')
  @Post('CreateSchedule')
  @ApiCreatedResponse({ description: 'The schedule has been successfully created.' })
  @ApiBadRequestResponse({ description: 'Invalid input data.' })
  create(@Body(ValidationPipe) createScheduleMgtDto: CreateScheduleMgtDto) {
    return this.scheduleMgtService.createRepository(createScheduleMgtDto);
  }

  @UseGuards(AuthGuard)
  @Roles('Doctor, Staff')
  @Get('ShowAllSchedule')
  @ApiOkResponse({ description: 'Retrieved all schedules successfully.' })
  findAll() {
    return this.scheduleMgtService.findAll();
  }

  @UseGuards(AuthGuard)
  @Roles('Doctor')
  @Get('ShowScheduleById/:schedule_id')
  @ApiOkResponse({ description: 'Retrieved the schedule successfully.' })
  @ApiNotFoundResponse({ description: 'Schedule not found.' })
  findOne(@Param('schedule_id', ParseIntPipe) schedule_id: number) {
    return this.scheduleMgtService.findOne(schedule_id);
  }

  @UseGuards(AuthGuard)
  @Roles('Doctor')
  @Patch('UpdateSchedule/:schedule_id')
  @ApiOkResponse({ description: 'The schedule has been successfully updated.' })
  @ApiNotFoundResponse({ description: 'Schedule not found.' })
  @ApiBadRequestResponse({ description: 'Invalid input data.' })
  update(@Param('schedule_id', ParseIntPipe) schedule_id: number, @Body(ValidationPipe) updateScheduleMgtDto: UpdateScheduleMgtDto) {
    return this.scheduleMgtService.update(schedule_id, updateScheduleMgtDto);
  }

  @UseGuards(AuthGuard)
  @Roles('Doctor')
  @Delete('DeleteSchedule/:schedule_id')
  @ApiOkResponse({ description: 'The schedule has been successfully deleted.' })
  @ApiNotFoundResponse({ description: 'Schedule not found.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized access.' })
  async remove(@Param('schedule_id', ParseIntPipe) schedule_id: number) {
    await this.scheduleMgtService.remove(schedule_id);
  }
}
