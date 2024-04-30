import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    productName: string;

    @IsString()
    @IsOptional()
    productDescription ?: string;

    @IsString()
    @IsNotEmpty()
    productPrice: string;

    @IsNumber()
    @IsNotEmpty()
    productQuantity: number;

}
