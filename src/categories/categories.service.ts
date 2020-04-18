import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategoryNotFoundException } from './exceptions/CategoryNotFoundException.exception';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ){}

    async getAllCategories(): Promise<Category[]> {
        try {
          let companies: Category[] = [];
          companies = await this.categoryRepository
            .createQueryBuilder('category')
            .getMany();
            return companies;
        } catch (error) {
          throw new CategoryNotFoundException(error.toString(), 500);
        }
      }
}
