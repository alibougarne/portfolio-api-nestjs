import { Category } from './category.entity';
import { DeleteResult, Repository } from 'typeorm';
export declare class CategoriesService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    getAllCategories(): Promise<Category[]>;
    saveCategory(category: Category): Promise<Category>;
    deleteCategory(categoryId: string): Promise<DeleteResult>;
}
