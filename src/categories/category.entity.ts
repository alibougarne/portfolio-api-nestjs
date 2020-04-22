import {
  Entity,
  Column,
  OneToMany
} from "typeorm";
import { Length } from "class-validator";
import { Project } from "../projects/project.entity";
import { Common } from "../shared/entities/common";

@Entity("categories")
export class Category extends Common {

  @Column()
  @Length(4, 20)
  name: string;

  @OneToMany(() => Project, project => project.category)
  projects: Project[];
}
