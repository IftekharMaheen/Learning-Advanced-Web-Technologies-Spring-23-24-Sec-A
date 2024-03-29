import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationEntity } from '../entities/auth.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [TypeOrmModule.forFeature([AuthenticationEntity],),
            JwtModule.register({
              global: true,
              secret: jwtConstants.secret,
              signOptions: { expiresIn: '20m' },
            }),
           ],
  exports: [AuthService],

})
export class AuthModule {}
