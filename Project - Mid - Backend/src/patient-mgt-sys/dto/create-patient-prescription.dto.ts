import { IsNotEmpty, IsNumber, IsString, IsOptional, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';
import { ApiProperty } from "@nestjs/swagger";

class MedicineList {
    @IsString()
    medicine_name: string;
  
    @IsString()
    time_per_day: string;
  
    @IsString()
    duration: string;
  }

export class CreatePatientPrescriptionDto {

    @ApiProperty({
      example: '1',
      required: true
    })
    @IsNotEmpty()
    @IsNumber()
    patient_id: number;

    @ApiProperty({
      example: '1',
      required: true
    })    
    @IsNotEmpty()
    @IsNumber()
    doctor_id: number;

    @ApiProperty({
      example: '2024-03-27',
      required: true
    })    
    @IsNotEmpty()
    @IsString()
    prescription_date: string;

    @ApiProperty({
      example: 'Fever, Cold',
      required: true
    })    
    @IsNotEmpty()
    @IsString()
    patient_symptoms: string;

    @ApiProperty({
      example: 'Patient had halucinations',
      required: false
    })    
    @IsString()
    @IsOptional()
    patient_additional_symptoms?: string;

    @ApiProperty({
      example: 'Patient had a major surgery a few days ago.',
      required: false
    })    
    @IsString()
    @IsOptional()
    patient_additional_notes?: string;
    
    @ApiProperty({
      description: 'The list of medicines for the prescription',
      type: () => [MedicineList],
      isArray: true,
    })    
    @IsNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => MedicineList)
    prescription_rx_body: MedicineList[];
    
    @ApiProperty({
      example: 'Patient needs to revisit after 2 weeks.',
      required: false
    })
    @IsString()
    @IsOptional()
    prescription_special_instruction?: string;
    
    @ApiProperty({
      example: 'ECG, Blood Suger Level',
      required: false
    })
    @IsString()
    @IsOptional()
    prescription_test_name?: string;

}
