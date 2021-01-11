import { Controller, Get, Post, Put, Body, Delete, Param } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesServices: CategoriesService){}

    @Get()
    async getAllCategories():Promise<Category[]>{
        return await this.categoriesServices.getAllCategories();
    }


    @Post()
    @Put()
    async createOrEditCategory(
      @Body() category: Category,
    ): Promise<Category> {
      return this.categoriesServices.saveCategory(category);
    }

    @Delete(':categoryId')
    async deleteCategory(@Param('categoryId') categoryId:string){
      return await this.categoriesServices.deleteCategory(categoryId);
    }
}
