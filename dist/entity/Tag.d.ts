import { Commmun } from "./Commun";
import { Project } from "./Project";
export declare class Tag extends Commmun {
    name: string;
    link: string;
    hashtag: string;
    backgroundColor: string;
    color: string;
    description: string;
    logoType: LogoType;
    projects: Project[];
}
export declare enum LogoType {
    Text = 0,
    Image = 1,
    TextAndImage = 2
}
