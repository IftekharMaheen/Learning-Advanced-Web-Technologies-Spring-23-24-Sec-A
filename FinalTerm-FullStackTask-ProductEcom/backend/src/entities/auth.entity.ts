import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  loginEmail: string;

  @Column()
  loginRole: string;

  @Column()
  loginPassword: string;
  
}
