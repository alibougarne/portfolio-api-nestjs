import { Category } from "src/categories/category.entity";
import { Common } from "src/shared/entities/common";
import { Tag } from "src/tags/tag.entity";
export declare class Project extends Common {
    name: string;
    description: string;
    rating: number;
    category: Category;
    tags: Tag[];
}
