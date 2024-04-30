import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateProductDto {

    @IsString()
    @IsNotEmpty()
    productName : string;

    @IsString()
    @IsOptional()
    productDescription ?: string;

    @IsString()
    @IsNotEmpty()
    productPrice : string;

    @IsString()
    @IsNotEmpty()
    productQuantity : number;

}
