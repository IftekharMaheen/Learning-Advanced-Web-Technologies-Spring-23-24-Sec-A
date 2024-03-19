import { Length, IsAlpha, IsAlphanumeric, IsEmail, IsInt, IsNotEmpty, IsString, Matches, IsEnum, IsDate } from "class-validator";

enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export class CreateAuthDto {

    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    @Length(3, 30)
    full_name: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    @Length(10, 50)
    email: string;

    @IsString()
    @Length(3, 20)
    city: string;
    
    @IsString()
    @Length(3, 20)
    country: string;
    
    @IsString()
    @Length(3, 20)
    company_name: string;

    @IsNotEmpty()
    @IsInt()
    @Length(11, 15)
    phone_number: number;

    @IsNotEmpty()
    @IsAlphanumeric()
    @Length(8, 20)
    password: string;

    @IsNotEmpty()
    @Matches('password')
    confirm_password: string;

    @IsEnum(Status)
    user_type: Status = Status.ACTIVE;

    @IsDate()
    current_date: Date = new Date();

    @IsDate()
    last_updated: Date | null = null;
}
