import { ScheduleMgt } from 'src/entities/schedule-mgt.entity';
import { AuthenticationEntity } from './src/auth/entities/auth.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { PatientPrescription } from 'src/entities/patient-prescription.entity';
import { AppointmentList } from 'src/entities/doctor-appointment-list.entity';
import { DocFinancials } from 'src/entities/doc-financial.entity';
import { RepList } from 'src/entities/rep-list.entity';
import { RepAppoitment } from 'src/entities/rep-appointment.entity';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'DB_HMS',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  entities: [AuthenticationEntity,
             ScheduleMgt,
             PatientPrescription,
             AppointmentList,
             DocFinancials,
             RepList,
             RepAppoitment],
  synchronize: true,
};

export default config;