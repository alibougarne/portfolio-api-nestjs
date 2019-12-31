import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Length, Max } from "class-validator";
import { Category } from "../categories/category.entity";
import { Common } from "../shared/entities/Common";
import { Tag } from "../tags/tag.entity";
import { type } from "os";

@Entity()
export class Project extends Common {
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
