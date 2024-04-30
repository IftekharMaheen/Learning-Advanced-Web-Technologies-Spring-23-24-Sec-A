import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEmployeeInfoDto {

    @IsNotEmpty()
    @IsString()
    employee_name: string;
    
    @IsNotEmpty()
    @IsString()
    employee_address: string;

    @IsNotEmpty()
    @IsNumber()
    employee_phone: string;
    
    @IsNotEmpty()
    @IsEmail()
    employee_email: string;
    
    @IsNotEmpty()
    @IsString()
    employee_gender: string;
    
    @IsNotEmpty()
    @IsString()
    employee_position: string;

    @IsNotEmpty()
    @IsNumber()
    employee_salary: number;

}
