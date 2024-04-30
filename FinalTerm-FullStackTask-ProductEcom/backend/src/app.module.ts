import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import Ormconfig from '../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(Ormconfig), ProductModule, CustomerModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
