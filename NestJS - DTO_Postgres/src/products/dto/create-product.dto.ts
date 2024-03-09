import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  id: number;

  @IsString({ message: 'valid product name is required' })
  @IsNotEmpty()
  name: string;

  @IsString()
  producer: string;
}
