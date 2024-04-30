import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmployeeInfo {
    @PrimaryGeneratedColumn()
    employee_id: number;

    @Column()
    employee_name: string;

    @Column()
    employee_address: string;

    @Column()
    employee_phone: string;

    @Column()
    employee_email: string;

    @Column()
    employee_gender: string;

    @Column()
    employee_position: string;

    @Column()
    employee_salary: number;
}
