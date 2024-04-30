import { IsString, IsNotEmpty, Matches, Length, IsEmail } from "class-validator";

export class UpdateCustomerDto {

    @IsString()
    @Matches(/^[a-zA-Z\s]*$/, { message: 'Name must contain only letters' })
    @Length(3, 50, { message: 'Name must be between 3 and 50 characters' })
    customerName ?: string;

    @IsEmail()
    customerEmail ?: string;

    @IsString()
    @Length(5,50,{message: 'Address must be between 5 to 50 characters'} )
    customerAddress ?: string;

    @IsString()
    @Length(11,11, {message: 'Phone number must be 11 characters'})
    customerPhone ?: string;

    @IsString()
    customerGender ?: string;

}