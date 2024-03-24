import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class loginDTO{
    
    @ApiProperty({
        example: 'rehmat.sayani@gmail.com',
        required: true
     })
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @ApiProperty({
        example: '1234578910',
        required: true
     })
    @IsString()
    @IsNotEmpty()
    password:string;
    
}