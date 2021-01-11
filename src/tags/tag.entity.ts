import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { Length, IsUrl } from "class-validator";
import { Common } from "../shared/entities/common";
import { Project } from "../projects/project.entity";

@Entity("tags")
export class Tag extends Common {
    @Column()
    @Length(1, 20)
    name: string;

    @Column()
    @Length(1, 20)
    hashtag: string;

    @Column({
        default :null
    })
    @Length(1, 50)
    icon: string;

    @Column()
    @Length(1, 20)
    @IsUrl()
    link: string;

    @Column({
        default :null
    })
    @Length(5, 1000)
    description: string;

    @Column({
        name: "text-color",
        default:"#fff"
    })
    @Length(3, 6)
    textColor: string;

    @Column({
        name: "background-color",
        default:"#ccc"
    })
    @Length(3, 6)
    backgroundColor: string;

    @Column({
        name: "logo-path",
        default :null
    })
    logoPath: string;

    @ManyToMany(type => Project, project => project.tags)
    @JoinTable({ name: 'projects_tags' })
    projects: Project[]

}
