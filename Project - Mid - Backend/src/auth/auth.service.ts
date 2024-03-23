import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { loginDTO } from './dto/login.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";
import { AuthenticationEntity } from '../entities/auth.entity';
import { Session } from 'express-session';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(AuthenticationEntity) private autheRepo: Repository<AuthenticationEntity>, private jwtService: JwtService){}
  AuthService: any;

  async findOne(email: string) {
    const user = await this.autheRepo.find({where: {Email: email}});
    console.log(user);
    return user;
  }

  //async findOne( logindata:loginDTO): Promise<any> {
    //return await this.autheRepo.findOneBy({email:logindata.email});
  //}

  async signIn(logindata:loginDTO, session: Session): Promise<{ access_token: string }> {
   
    //const user = await this.AuthService.findOne(logindata);
    const user = await this.autheRepo.findOneBy({Email:logindata.email});
    if (!user) {
      throw new UnauthorizedException("This Account is Not Found");
    }
    
    const isMatch = await bcrypt.compare(logindata.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException("Invalid Credentials");
    }
    
    const payload = {email: user.Email, role: user.Role};
    //console.log('User Roles Service:', user.role);
    // Store data in session
    
    session['email'] = user.Email;
    console.log(session['email']);
    
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
