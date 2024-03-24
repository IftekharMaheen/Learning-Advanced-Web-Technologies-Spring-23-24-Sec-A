import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from "class-validator";

export enum MedType {
    TABLET = 'tablet',
    CAPSULE = 'capsule',
    SYRUP = 'syrup',
    INJECTION = 'injection',
    DROPS = 'drops',
    CREAM = 'cream',
    OINTMENT = 'ointment'
}

export class CreateMedicineListDto {

    @ApiProperty({
        example: 'Fexo 120',
        required: true
     })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-zA-Z0-9 .]*$/, { message: 'Medicine Name can only contain letters, spaces, and periods', })
    med_name: string;

    @ApiProperty({ 
        example: "tablet|capsule|syrup|injection|drops|cream|ointment",
        required: true
     })
    @IsNotEmpty()
    @IsEnum(MedType)
    med_type: string;

    @ApiProperty({
        example: 'Paracitamol',
        required: true
     })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-zA-Z\s]+$/, { message: 'Medicine Generic can only contain letters, spaces, and periods', })
    med_generic: string;

    @ApiProperty({
        example: '10',
        required: true
     })
    @IsNumber()
    @IsNotEmpty()
    med_qty_per_strip: number;

    @ApiProperty({
        example: '5',
        required: true
     })
    @IsNumber()
    @IsNotEmpty()
    med_strip_per_box: number;

    @ApiProperty({
        example: 'Beximco Pharma Limited.',
        required: true
     })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-zA-Z .]*$/, { message: 'Medicine Manufacturer can only contain letters, spaces, and periods', })
    med_manufacturer: string;

    @ApiProperty({
        example: 'Napa (Paracetamol) is a fast acting and safe analgesic with marked antipyretic property. It is specially suitable for patients who, for any reason, can not tolerate aspirin or other analgesics. Napa suppositories are used for rapid symptomatic management of pain and fever.',
        required: false
     })
    @IsString()
    @IsOptional()
    med_description: string;

    @ApiProperty({
        example: 'Image File Should be uploaded here.',
        required: false
     })
    @IsString()
    @IsOptional()
    med_image: string;

}
