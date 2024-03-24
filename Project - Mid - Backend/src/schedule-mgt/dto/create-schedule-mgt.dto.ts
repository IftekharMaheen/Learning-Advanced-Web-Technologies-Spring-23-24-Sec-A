import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateScheduleMgtDto {

    @ApiProperty({
        example: '2024-03-11',
        required: true
      })
    @IsNotEmpty()
    @IsString()
    schedule_date: string;

    @ApiProperty({
        example: '19:00:00',
        required: true
      })
    @IsNotEmpty()
    @IsString()
    schedule_start_time: string;

    @ApiProperty({
        example: '20:00:00',
        required: true
      })
    @IsNotEmpty()
    @IsString()
    schedule_end_time: string;

}
