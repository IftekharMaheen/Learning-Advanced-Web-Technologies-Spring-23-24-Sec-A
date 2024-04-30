import Ormconfig from 'ormconfig';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeInfoModule } from './employee-info/employee-info.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [EmployeeInfoModule,
            TypeOrmModule.forRoot(Ormconfig)
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
