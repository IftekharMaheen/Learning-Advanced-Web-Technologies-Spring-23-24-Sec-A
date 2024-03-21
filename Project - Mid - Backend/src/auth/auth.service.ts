import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { loginDTO } from './dto/login.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";
import { AuthenticationEntity } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(AuthenticationEntity) private autheRepo: Repository<AuthenticationEntity>, private jwtService: JwtService){}
  AuthService: any;
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  async findOne(email: string) {
    const user = await this.autheRepo.find({where: {Email: email}});
    console.log(user);
    return user;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  //async findOne( logindata:loginDTO): Promise<any> {
    //return await this.autheRepo.findOneBy({email:logindata.email});
  //}

  async signIn(logindata:loginDTO): Promise<{ access_token: string }> {
   
    //const user = await this.AuthService.findOne(logindata);
    const user = await this.autheRepo.findOneBy({Email:logindata.email});
    if (!user) {
      throw new UnauthorizedException("This Account is Not Found");
    }
    /*
    const isMatch = await bcrypt.compare(logindata.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException("Please Give Valid Data");
    }
    */
    const payload = {email: user.Email};
    //console.log('User Roles Service:', user.role);
    // Store data in session
    /*
    session['email'] = user.email;
    console.log(session['email']);
    */
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
