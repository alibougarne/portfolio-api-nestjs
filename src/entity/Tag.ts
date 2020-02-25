import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Length } from "class-validator";
import { Commmun } from "./Commun";
import { Project } from "./Project";

@Entity()
export class Tag extends Commmun {
    @Column()
    @Length(1, 20)
    name: string;

    @Column()
    @Length(4, 20)
    link: string;

    @Column()
    @Length(1, 20)
    hashtag: string;

    @Column()
    @Length(1, 20)
    backgroundColor: string;

    @Column()
    @Length(1, 20)
    color: string;

    @Column()
    @Length(1, 1000)
    description: string;

    @Column()
    @Length(1, 1000)
    logoType: LogoType;

    @ManyToMany(type => Project, project => project.tags)
    @JoinTable({name:'projects_tags'})
    projects: Project[];
}
export enum LogoType {
    Text,
    Image,
    TextAndImage
}
