import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { ProjectNotFoundException } from './exception/projectNotFoundException.exception';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async getAllProjects(): Promise<Project[]> {
    let projects: Project[] = [];
    try {
      projects = await this.projectRepository
        .createQueryBuilder('project')
        .leftJoinAndSelect('project.category', 'category')
        .leftJoinAndSelect('project.company', 'company')
        .leftJoinAndSelect('project.tags', 'tag')
        .getMany();
    } catch (error) {
      throw new ProjectNotFoundException(error.toString(), 500);
    }
    // console.log(projects);
    return projects;
  }

  async getProjectsByTag(tagId: string): Promise<Project[]> {
    let projects: Project[] = [];
    try {
      projects = await this.projectRepository
        .createQueryBuilder('project')
        .innerJoinAndSelect('project.tags', 'tag')
        .innerJoinAndSelect('project.tags', 'tag2')
        .leftJoinAndSelect('project.category', 'category')
        .where('tag.id = :id', { id: tagId })
        .getMany();
    } catch (error) {
      throw new ProjectNotFoundException(error.toString(), 500);
    }
    // console.log(projects);
    return projects;
  }

  async getProjectsByCategory(catId: number): Promise<Project[]> {
    let projects: Project[] = [];
    try {
      projects = await this.projectRepository
        .createQueryBuilder('project')
        .leftJoinAndSelect('project.category', 'category')
        .where('category.id = :id', { id: catId })
        .getMany();
    } catch (error) {
      throw new ProjectNotFoundException(error.toString(), 500);
    }
    // console.log(projects);
    return projects;
  }
}
