import { Controller, Get } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesServices: CategoriesService){}

    @Get()
    async getAllCategories():Promise<Category[]>{
        return await this.categoriesServices.getAllCategories();
    }
}
