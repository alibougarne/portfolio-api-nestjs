import { Project } from "../projects/project.entity";
import { Common } from "../shared/entities/common";
export declare class Category extends Common {
    name: string;
    projects: Project[];
}
