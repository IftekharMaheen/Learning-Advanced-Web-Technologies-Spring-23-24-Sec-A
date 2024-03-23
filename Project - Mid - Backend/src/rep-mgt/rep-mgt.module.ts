import { Module } from '@nestjs/common';
import { RepMgtService } from './rep-mgt.service';
import { RepMgtController } from './rep-mgt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepList } from 'src/entities/rep-list.entity';
import { RepAppoitment } from 'src/entities/rep-appointment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RepList]),
            TypeOrmModule.forFeature([RepAppoitment])],
  controllers: [RepMgtController],
  providers: [RepMgtService],
})

export class RepMgtModule {}
