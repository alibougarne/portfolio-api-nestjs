import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), MulterModule.register({
    dest: './client/resources/categories',
  })],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
