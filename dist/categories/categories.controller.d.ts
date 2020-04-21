import { Category } from './category.entity';
import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesServices;
    constructor(categoriesServices: CategoriesService);
    getAllCategories(): Promise<Category[]>;
    createOrEditCategory(category: Category): Promise<Category>;
    deleteCategory(categoryId: string): Promise<import("typeorm").DeleteResult>;
}
