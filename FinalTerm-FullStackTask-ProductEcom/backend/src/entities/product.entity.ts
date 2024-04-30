import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    productId: number;

    @Column()
    productName: string;

    @Column()
    productDescription: string;

    @Column()
    productPrice: string;

    @Column()
    productQuantity: number;

}
