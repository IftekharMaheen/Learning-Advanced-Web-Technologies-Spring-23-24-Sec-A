import {
    BeforeInsert,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('products')
  export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true, nullable: false })
    name: string;
  
    @Column({ unique: true, nullable: false })
    producer: string;
  }