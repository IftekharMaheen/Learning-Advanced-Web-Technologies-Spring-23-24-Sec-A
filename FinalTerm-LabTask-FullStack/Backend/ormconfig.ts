import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { EmployeeInfo } from 'src/entities/employee-info.entity';

const config: PostgresConnectionOptions = {
    type: 'postgres',
    database: 'apwt_lt',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    entities: [EmployeeInfo],
    synchronize: true,
  };
  
  export default config;