import { Injectable } from '@nestjs/common';
import { CreateMedicineListDto } from './dto/create-medicine-list.dto';
import { UpdateMedicineListDto } from './dto/update-medicine-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicineList } from 'src/entities/medicine-list.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MedicineListService {
  
  constructor(
    @InjectRepository(MedicineList)
    private medicineListRepository: Repository<MedicineList>,
  ) {}

  async createMedicineRepository(createMedicineListDto: CreateMedicineListDto) {
    const medicineListData = await this.medicineListRepository.create(createMedicineListDto);
    return await this.medicineListRepository.save(medicineListData);
  }

  viewAllMedicine() {
    return this.medicineListRepository.find();
  }

  viewSingleMedicine(id: number): Promise<MedicineList | undefined>{
    const medicineListInfo = this.medicineListRepository.findOne({where: { med_id: id }});
    return medicineListInfo;
  }

  async updateMedicineInfo(id: number, updateMedicineListDto: UpdateMedicineListDto) {
    const medicineUpdate = await this.medicineListRepository.findOne({ where: { med_id: id } });
    if (medicineUpdate) {
      await this.medicineListRepository.update(id, updateMedicineListDto);
      return `Medicine ID: ${id} has been updated successfully`;
    } 
    else {
      return `Medicine ID: ${id} not found`;
    }
  }


}
