import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleMgtModule } from './schedule-mgt/schedule-mgt.module';
import { PatientMgtSysModule } from './patient-mgt-sys/patient-mgt-sys.module';
import Ormconfig from 'ormconfig';

@Module({
  imports: [AuthModule, 
            TypeOrmModule.forRoot(Ormconfig),
            ScheduleMgtModule,
            PatientMgtSysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

