import { Common } from "../shared/entities/common";
import { Project } from "../projects/project.entity";
export declare class Tag extends Common {
    name: string;
    hashtag: string;
    icon: string;
    link: string;
    description: string;
    textColor: string;
    backgroundColor: string;
    logoPath: string;
    projects: Project[];
}
