import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDTO } from './dto/login.dto';
import { AuthGuard } from './auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Get('getUser/:email')
  findOne(@Param('email') email: string) {
    return this.authService.findOne(email);
  }

  @Post('login')
  signIn(@Body() logindata: loginDTO, @Req() req: Request) {
    return this.authService.signIn(logindata,req.session);
  }

  @UseGuards(AuthGuard)
  @Get('getUserData')
  getData():string {
    console.log("Test Test Test");
    return "The Token is Authenticated";
  }
}
