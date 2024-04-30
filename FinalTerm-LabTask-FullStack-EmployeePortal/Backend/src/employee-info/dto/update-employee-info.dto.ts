import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches } from "class-validator";

export class UpdateEmployeeInfoDto {
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-zA-Z\s]+$/, 
    { message: 'Name must contain only letters' })
    @Length(3,30, { message: 'Name must be between 3 and 30 characters'})
    employee_name : string;

    @IsNotEmpty()
    @IsEmail()
    employeeEmail : string;

    @IsNotEmpty()
    @IsString()
    @Length(5,50,{message: 'Address must be between 5 to 50 characters'} )
    employeeAddress : string;

    @IsNotEmpty()
    @IsString()
    @Length(11,11, {message: 'Phone number must be 11 characters'})
    employeePhone : string;

    @IsNotEmpty()
    @IsString()
    employeePosition : string;

    @IsNotEmpty()
    @IsString()
    employeeSalaray : string;
}
