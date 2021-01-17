import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Project } from '../../projects/project.entity';
import { Category } from '../../categories/category.entity';
import { Tag } from '../../tags/tag.entity';
import { Company } from '../../admin-features/companies/company.entity';
import { BaseExceptionFilter } from '@nestjs/core';
import projects from './data/projects.json'
export class createProjects1574798221692 implements MigrationInterface {
  private categoryRepository = getRepository(Category);
  private companyRepository = getRepository(Company);
  private projectRepository = getRepository(Project);
  private tagRepository = getRepository(Tag);
  public async up(queryRunner: QueryRunner): Promise<any> {
    try {
      for (const project of projects) {
        await this.createProject(project);
      }
    } catch (error) {
      console.error('%c⧭ error projetcs migration ', 'color: #cc0088', error);
    }
  }
  async createProject(project: any): Promise<any> {
    console.log('%c⧭', 'color: #0088cc', "======= createProject begin ===== ");

    let category = new Category();
    let categories: Category[];

    // let categoryNameObj = { name: project.categoryName };
    // category = await this.categoryRepository.findOneOrFail({ where: { categoryNameObj } });
    categories = await this.categoryRepository.find({
      where: { name: project.categoryName },
    });

    if (categories[0]) {
      category = categories[0];
    } else {
      category.name = project.categoryName;
      category.createdAt = category.updatedAt = new Date();
      await this.categoryRepository.save(category);
    }

    
    for (let prj of project.nameList) {
      let company = new Company();
      let companies: Company[];
      companies = await this.companyRepository.find({
        where: { name: prj.company },
      });
      if (companies[0]) {
        company = companies[0];
      } else {
            throw BaseExceptionFilter
      }
      let project = new Project();
      let tags: Tag[] = [];
      project.category = category;
      project.name = prj.name;
      project.description = prj.description.en;
      project.createdAt = project.updatedAt = new Date();
      project.company = company;
      project.beginDate = project.endDate = new Date();
      for (let tagName of prj.tags) {
        let tag = new Tag();
        let findedTags: Tag[] = [];
        // let tagNameObj = { name: tagName };
        findedTags = await this.tagRepository.find({
          where: { hashtag: tagName },
        });
        if (findedTags[0]) {
          tag = findedTags[0];
        } else {
          console.log('%c⧭ the tag  is 💩💩:', 'color: #00a3cc', tag);
          tag.createdAt = tag.updatedAt = new Date();
          tag.name = tagName;
          // await this.tagRepository.save(tag);
        }
        console.log(`%c⧭ the tag  is 🦄 ${tagName}: `, 'color: #00a3cc', tag);
        tags.push(tag);
      }
      // await prj.tags.forEach(async (tagName: string) => {
      // });
      project.tags = tags;
      await this.projectRepository.save(project);
    }
    // await project.nameList.forEach(async (prj: any) => {
        console.log('%c⧭', 'color: #0088cc', "======= createProject end ===== ");

    // })
  }
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
