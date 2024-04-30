import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from 'src/entities/auth.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Auth)
    private authRepo: Repository<Auth>,
    private jwtService: JwtService
  )
  {}

  async login(loginData: any)
  {
    const user = await this.authRepo.findOne({where:{loginEmail: loginData.loginEmail}});
    
    if(!user)
      {
        throw new Error('User not found');
      }

      const payload = {loginEmail: user.loginEmail, loginRole: user.loginRole};

      if(user && user.loginPassword === loginData.loginPassword)
      {
          const token = await this.jwtService.signAsync(payload);
          return {token, user};
      }
  }
}