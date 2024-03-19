import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Auth {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    full_name: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @Column()
    company_name: string;

    @Column()
    phone_number: number;

    @Column()
    password: string;

    @Column()
    user_type: string;

    @Column()
    date_added: Date;

    @Column()
    last_updated: Date;
}
