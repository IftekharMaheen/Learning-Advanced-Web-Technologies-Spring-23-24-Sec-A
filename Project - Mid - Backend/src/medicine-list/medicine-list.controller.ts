import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe, UseInterceptors, UploadedFile, Req, UseGuards } from '@nestjs/common';
import { MedicineListService } from './medicine-list.service';
import { CreateMedicineListDto } from './dto/create-medicine-list.dto';
import { UpdateMedicineListDto } from './dto/update-medicine-list.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
@Controller('medicine-list')
@ApiTags('Medicine List')
@ApiBearerAuth()
export class MedicineListController {
  
  constructor(private readonly medicineListService: MedicineListService) {}

  @UseGuards(AuthGuard)
  @Roles('Doctor')
  @Post('AddMedicine')
  @ApiBody({ type: CreateMedicineListDto })
  @ApiResponse({ status: 201, description: 'Medicine added successfully' })
  create(@Body(ValidationPipe) createMedicineListDto: CreateMedicineListDto) {
    return this.medicineListService.createMedicineRepository(createMedicineListDto);
  }

  @UseGuards(AuthGuard)
  @Roles('Doctor')
  @Post('UploadMedicineImage/:med_id')
  @UseInterceptors(FileInterceptor('file', { 
    storage: diskStorage({ destination: './uploads' }),
  }))
  @ApiParam({ name: 'med_id', type: 'number' })
  @ApiBody({ type: 'file' })
  @ApiResponse({ status: 200, description: 'Medicine image uploaded successfully' })
  async uploadFile(@Param('med_id', ParseIntPipe) med_id: number, @UploadedFile() file: any, @Req() req: Request) {
    console.log(file);
    await this.medicineListService.uploadMedicineImg(med_id, file);
    return { filename: file.filename };
  }

  @UseGuards(AuthGuard)
  @Roles('Doctor')
  @Get('ViewMedicineList')
  @ApiResponse({ status: 200, description: 'Retrieved all medicine list' })
  viewAllMedicine() {
    return this.medicineListService.viewAllMedicine();
  }

  @UseGuards(AuthGuard)
  @Roles('Doctor')
  @Get('ViewMedicineList/:med_id')
  @ApiParam({ name: 'med_id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Retrieved single medicine' })
  viewSingleMedicine(@Param('med_id', ParseIntPipe) med_id: number) {
    return this.medicineListService.viewSingleMedicine(med_id);
  }

  @UseGuards(AuthGuard)
  @Roles('Doctor')
  @Patch('UpdateMedicineInfo/:med_id')
  @ApiParam({ name: 'med_id', type: 'number' })
  @ApiBody({ type: UpdateMedicineListDto })
  @ApiResponse({ status: 200, description: 'Medicine info updated successfully' })
  update(@Param('med_id', ParseIntPipe) med_id: number, @Body() updateMedicineListDto: UpdateMedicineListDto) {
    return this.medicineListService.updateMedicineInfo(med_id, updateMedicineListDto);
  }

}
