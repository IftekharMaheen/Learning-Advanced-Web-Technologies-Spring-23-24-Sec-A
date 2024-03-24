import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum DocAppointmentStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    CANCELLED = 'cancelled'
}

export class UpdateScheduleMgtDto {
    
    @ApiProperty({
        example: '2024-03-11',
        required: false
      })
    @IsString()
    @IsOptional()
    schedule_date?: string;
    
    @ApiProperty({
        example: '20:00:00',
        required: false
      })
    @IsString()
    @IsOptional()
    schedule_start_time?: string;

    @ApiProperty({
        example: '19:00:00',
        required: false
      })
    @IsString()
    @IsOptional()
    schedule_end_time?: string;

    @ApiProperty({ 
        example: "pending|confirmed|cancelled",
        required: false
     })
    @IsEnum(DocAppointmentStatus)
    @IsOptional()
    schedule_status?: string;

}
