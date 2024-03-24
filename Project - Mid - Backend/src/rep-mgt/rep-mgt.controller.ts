import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { RepMgtService } from './rep-mgt.service';
import { CreateRepListDto } from './dto/create-rep-list.dto';
import { UpdateRepListDto } from './dto/update-rep-list.dto';
import { CreateRepAppDto } from './dto/create-rep-app.dto';
import { UpdateRepAppDto } from './dto/update-rep-app.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiNotFoundResponse, ApiBadRequestResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
@ApiTags('Representative Management')
@ApiBearerAuth()
@Controller('rep-mgt')
export class RepMgtController {
  constructor(private readonly repMgtService: RepMgtService) {}

  @UseGuards(AuthGuard)
  @Roles('Staff')
  @ApiCreatedResponse({ description: 'Rep added successfully' })
  @ApiBadRequestResponse({ description: 'Invalid data provided' })
  @Post('AddRep')
  addRep(@Body(ValidationPipe) createRepListDto: CreateRepListDto) {
    return this.repMgtService.addRep(createRepListDto);
  }

  @UseGuards(AuthGuard)
  @Roles('Doctor, Staff')
  @ApiOkResponse({ description: 'Rep found successfully' })
  @ApiNotFoundResponse({ description: 'Rep not found' })
  @Get('SearchRep/:rep_id')
  findOne(@Param('rep_id', ParseIntPipe) rep_id: number) {
    return this.repMgtService.findOne(rep_id);
  }

  @UseGuards(AuthGuard)
  @Roles('Staff')
  @ApiOkResponse({ description: 'Rep updated successfully' })
  @ApiNotFoundResponse({ description: 'Rep not found' })
  @ApiBadRequestResponse({ description: 'Invalid data provided' })
  @Patch('UpdateRep/:rep_id')
  update(@Param('rep_id', ParseIntPipe) rep_id: number, @Body(ValidationPipe) updateRepListDto: UpdateRepListDto) {
    return this.repMgtService.updateRep(rep_id, updateRepListDto);
  }

  @UseGuards(AuthGuard)
  @Roles('Staff')
  @ApiCreatedResponse({ description: 'Rep appointment added successfully' })
  @ApiBadRequestResponse({ description: 'Invalid data provided' })
  @Post('AddRepAppointment')
  addRepAppointment(@Body(ValidationPipe) createRepAppDto: CreateRepAppDto) {
    return this.repMgtService.addRepAppointment(createRepAppDto);
  }

  @UseGuards(AuthGuard)
  @Roles('Doctor, Staff')
  @ApiOkResponse({ description: 'Rep appointment found successfully' })
  @ApiNotFoundResponse({ description: 'Rep appointment not found' })
  @Get('SearchRepAppointment/:rep_app_id')
  findOneRepAppointment(@Param('rep_app_id', ParseIntPipe) rep_app_id: number) {
    return this.repMgtService.findAppointment(rep_app_id);
  }

  @UseGuards(AuthGuard)
  @Roles('Doctor, Staff')
  @ApiOkResponse({ description: 'Rep appointments retrieved successfully' })
  @ApiNotFoundResponse({ description: 'Doctor not found' })
  @Get('ViewRepAppointments/:doc_id')
  async getRepAppointments(@Param('doc_id', ParseIntPipe) doc_id: number) {
    const appointments = await this.repMgtService.getRepAppointments(doc_id);
    return appointments;
  }

  @UseGuards(AuthGuard)
  @Roles('Staff')
  @ApiOkResponse({ description: 'Rep appointment updated successfully' })
  @ApiNotFoundResponse({ description: 'Rep appointment not found' })
  @ApiBadRequestResponse({ description: 'Invalid data provided' })
  @Patch('UpdateRepAppointment/:rep_app_id')
  updateRepAppointment(@Param('rep_app_id', ParseIntPipe) rep_app_id: number, @Body(ValidationPipe) updateRepAppDto: UpdateRepAppDto) {
    return this.repMgtService.updateRepAppointment(rep_app_id, updateRepAppDto);
  }

}
