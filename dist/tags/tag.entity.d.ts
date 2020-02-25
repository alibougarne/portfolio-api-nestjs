import { Common } from "src/shared/entities/common";
import { Project } from "src/projects/project.entity";
export declare class Tag extends Common {
    name: string;
    hashtag: string;
    link: string;
    description: string;
    textColor: string;
    backgroundColor: string;
    projects: Project[];
}
