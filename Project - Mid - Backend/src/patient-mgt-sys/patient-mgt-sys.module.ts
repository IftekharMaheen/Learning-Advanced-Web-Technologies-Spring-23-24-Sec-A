import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PatientMgtSysService } from './patient-mgt-sys.service';
import { PatientMgtSysController } from './patient-mgt-sys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientPrescription } from 'src/entities/patient-prescription.entity';
import { AppointmentList } from 'src/entities/doctor-appointment-list.entity';
import { LoggingMiddleware } from 'src/middleware/logging-middleware';

@Module({
  imports: [TypeOrmModule.forFeature([PatientPrescription]),
            TypeOrmModule.forFeature([AppointmentList])],
  controllers: [PatientMgtSysController],
  providers: [PatientMgtSysService],
})

export class PatientMgtSysModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes(PatientMgtSysController);
  }
}
