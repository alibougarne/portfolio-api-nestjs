import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
  } from "typeorm";
import { Length } from "class-validator";
import { Project } from "./Project";
import { Commmun } from "./Commun";

@Entity()
export class Category extends Commmun{

    @Column()
    @Length(4, 20)
    name: string;

    @OneToMany(type => Project, project => project.category)
    projects: Project[];

}
