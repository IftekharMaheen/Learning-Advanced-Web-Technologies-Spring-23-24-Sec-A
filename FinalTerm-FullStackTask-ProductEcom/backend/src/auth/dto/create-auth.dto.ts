import { IsEmail, IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class CreateAuthDto {

    @IsEmail()
    @IsNotEmpty()
    loginEmail: string;

    @IsNotEmpty()
    @IsString()
    @Length(8, 20, {message : 'Password must be 8 - 20 length!'})
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number or special character',
    })
    loginPassword: string;

    @IsNotEmpty()
    @IsString()
    loginRole: string;
}
