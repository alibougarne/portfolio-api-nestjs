import { Project } from "src/projects/project.entity";
import { Common } from "src/shared/entities/common";
export declare class Category extends Common {
    name: string;
    projects: Project[];
}
