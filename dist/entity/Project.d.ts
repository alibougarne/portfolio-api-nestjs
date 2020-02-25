import { Category } from "./Category";
import { Commmun } from "./Commun";
import { Tag } from "./Tag";
export declare class Project extends Commmun {
    name: string;
    description: string;
    rating: number;
    category: Category;
    tags: Tag[];
}
