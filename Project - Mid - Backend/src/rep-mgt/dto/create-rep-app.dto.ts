import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRepAppDto {

    @ApiProperty({
        example: '1',
        required: true
      })
    @IsString()
    @IsNotEmpty()
    rep_id: number;

    @ApiProperty({
        example: '1',
        required: true
      })
    @IsString()
    @IsNotEmpty()
    doc_id: number;

    @ApiProperty({
        example: '2023-02-01',
        required: true
      })
    @IsString()
    @IsNotEmpty()
    @IsDateString()
    app_date: string;

    @ApiProperty({
        example: '10:00:00',
        required: true
      })
    @IsString()
    @IsNotEmpty()
    app_time: string;

    @ApiProperty({
        example: 'This is an appointment note',
        required: false
      })
    @IsString()
    @IsOptional()
    app_note: string;

}