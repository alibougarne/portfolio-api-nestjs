import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategoryNotFoundException } from './exceptions/CategoryNotFoundException.exception';
import { DeleteResult } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

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

  async saveCategory(category: Category): Promise<Category> {
    try {
      return await this.categoryRepository.save(category);
    } catch (error) {
      throw new CategoryNotFoundException(error.toString(), 500);
    }
  }

  async deleteCategory(categoryId: string): Promise<DeleteResult> {
    try {
      return await this.categoryRepository.delete(categoryId);
    } catch (error) {
      throw new CategoryNotFoundException(error.toString(), 500);
    }
  }
}
