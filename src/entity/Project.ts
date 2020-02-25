import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Length, Max } from "class-validator";
import { Category } from "./Category";
import { Commmun } from "./Commun";
import { Tag } from "./Tag";

@Entity()
export class Project extends Commmun {
    @Column()
    @Length(4, 20)
    name: string;

    @Column()
    @Length(4, 1500)
    description: string;

    @Column({default:0})
    @Max(5)
    rating:number;

    @ManyToOne(type => Category, category => category.projects)
    category: Category;

    @ManyToMany(type => Tag, tag => tag.projects)
    @JoinTable({name:'projects_tags'})
    tags: Tag[];
}
