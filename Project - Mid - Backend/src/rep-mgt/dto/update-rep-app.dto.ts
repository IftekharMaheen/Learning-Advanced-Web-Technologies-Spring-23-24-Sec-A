import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';

export enum AppStatus {
    CONFIRMED = 'comfirmed',
    CANCELLED = 'cancelled'
}

export class UpdateRepAppDto {
    
    @ApiProperty({ 
        example: "confirmed|cancelled",
        required: true
    })
    @IsNotEmpty()
    @IsEnum(AppStatus)
    app_status: AppStatus;
    
}

