import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class Commmun{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:'created_at'})
    @CreateDateColumn()
    createdAt: Date;
  
    @Column({name:'updated_at'})
    @UpdateDateColumn()
    updatedAt: Date;
}