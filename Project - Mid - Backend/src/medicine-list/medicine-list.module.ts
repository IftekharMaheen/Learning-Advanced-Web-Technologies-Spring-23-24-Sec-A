import { Module } from '@nestjs/common';
import { MedicineListService } from './medicine-list.service';
import { MedicineListController } from './medicine-list.controller';
import { MedicineList } from 'src/entities/medicine-list.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MedicineList])],
  controllers: [MedicineListController],
  providers: [MedicineListService],
})
export class MedicineListModule {}
