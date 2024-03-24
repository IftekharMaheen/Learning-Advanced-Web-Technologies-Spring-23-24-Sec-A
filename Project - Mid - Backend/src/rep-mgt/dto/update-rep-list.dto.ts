import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export enum RepStatus {
    VALID = 'valid',
    BLACKLISTED = 'blacklisted'
}

export class UpdateRepListDto {

        @ApiProperty({
            example: 'test@gmail.com',
            required: true
          })
        @IsOptional()
        @IsEmail()
        rep_email?: string;
    
        @ApiProperty({
            example: '+880171167890',
            required: false
          })
        @IsOptional()
        @IsString()
        @IsPhoneNumber('BD')
        rep_phone?: string;
    
        @ApiProperty({
            example: '100, Kuratoli, Dhaka',
            required: false
          })
        @IsOptional()
        @IsString()
        rep_address?: string;
    
        @ApiProperty({
            example: 'Square Pharma Limited',
            required: false
          })
        @IsOptional()
        @IsString()
        rep_company?: string;
    
        @IsOptional()
        @IsEnum(RepStatus)
        rep_status?: RepStatus;

}
