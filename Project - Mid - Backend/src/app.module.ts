import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleMgtModule } from './schedule-mgt/schedule-mgt.module';
import { PatientMgtSysModule } from './patient-mgt-sys/patient-mgt-sys.module';
import { DocFinancialsModule } from './doc-financials/doc-financials.module';
import { RepMgtModule } from './rep-mgt/rep-mgt.module';
import { MedicineListModule } from './medicine-list/medicine-list.module';
import Ormconfig from 'ormconfig';

@Module({
  imports: [AuthModule, 
            TypeOrmModule.forRoot(Ormconfig),
            ScheduleMgtModule,
            PatientMgtSysModule,
            DocFinancialsModule,
            RepMgtModule,
            MedicineListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

