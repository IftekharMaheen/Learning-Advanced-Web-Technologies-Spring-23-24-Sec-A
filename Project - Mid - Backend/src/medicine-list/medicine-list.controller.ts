import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { MedicineListService } from './medicine-list.service';
import { CreateMedicineListDto } from './dto/create-medicine-list.dto';
import { UpdateMedicineListDto } from './dto/update-medicine-list.dto';

@Controller('medicine-list')
export class MedicineListController {
  
  constructor(private readonly medicineListService: MedicineListService) {}

  @Post('AddMedicine')
  create(@Body(ValidationPipe) createMedicineListDto: CreateMedicineListDto) {
    return this.medicineListService.createMedicineRepository(createMedicineListDto);
  }

  @Get('ViewMedicineList')
  viewAllMedicine() {
    return this.medicineListService.viewAllMedicine();
  }

  @Get('ViewMedicineList/:med_id')
  viewSingleMedicine(@Param('med_id', ParseIntPipe) med_id: number) {
    return this.medicineListService.viewSingleMedicine(med_id);
  }

  @Patch('UpdateMedicineInfo/:med_id')
  update(@Param('med_id', ParseIntPipe) med_id: number, @Body() updateMedicineListDto: UpdateMedicineListDto) {
    return this.medicineListService.updateMedicineInfo(med_id, updateMedicineListDto);
  }

}
