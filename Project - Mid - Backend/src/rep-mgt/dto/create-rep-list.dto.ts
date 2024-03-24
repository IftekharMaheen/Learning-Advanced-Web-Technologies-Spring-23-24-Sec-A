import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber, Matches } from 'class-validator';

export class CreateRepListDto {

    @ApiProperty({
        example: 'Hasam Mahbub',
        required: true
      })
    @IsString({ message: 'Please enter a representative valid name' })
    @IsNotEmpty()
    @Matches(/^[a-zA-Z\s]+$/, { message: 'rep_name must contain only letters (a-zA-Z) and spaces' })
    rep_name: string;

    @ApiProperty({
        example: 'test@gmail.com',
        required: true
      })
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    rep_email: string;

    @ApiProperty({
        example: '+880171167890',
        required: true
      })
    @IsString()
    @IsNotEmpty()
    @IsPhoneNumber('BD')
    rep_phone: string;

    @ApiProperty({
        example: '100, Kuratoli, Dhaka',
        required: true
      })
    @IsString()
    @IsNotEmpty()
    rep_address: string;

    @ApiProperty({
        example: 'Square Pharma Limited',
        required: true
      })
    @IsString()
    @IsNotEmpty()
    rep_company: string;
    
}
