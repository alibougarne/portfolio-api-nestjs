import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { ProjectNotFoundException } from './exception/projectNotFoundException.exception';
import { join } from 'path';
import Cloudinary from 'src/tools/cloudinary';

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

  async saveProject(project: Project): Promise<Project> {
    try {
      const cloudinary = new Cloudinary();
      if (project.id) {
        for (let image in project.images) {
          await cloudinary.deleteImage(
            `portfolio/projects/${image}`,
            async (error: Error, result: any) => {
              if (error) {
                console.error('%c⧭', 'color: #731d6d', error);
                throw error;
              }
            },
          );
          await cloudinary.save(
            image,
            'portfolio/tags',
            async (error: Error, result: any) => {
              if (error) {
                console.error('%c⧭', 'color: #731d6d', error);
                throw error;
              }
            },
          );
        }
      }
      return await this.projectRepository.save(project);
    } catch (error) {
      throw new ProjectNotFoundException(error.toString(), 500);
    }
  }

  async deleteProject(projectId: string) {
    try {
      let project = await this.projectRepository.findOne(projectId);
      const cloudinary = new Cloudinary();
      for (let image in project.images) {
        await cloudinary.deleteImage(
          `portfolio/projects/${image}`,
          async (error: Error, result: any) => {
            if (error) {
              console.error('%c⧭', 'color: #731d6d', error);
              throw error;
            }
          },
        );
      }
      const fs = require('fs');
      project.images.forEach((image: string) => {
        fs.unlinkSync(`./client/resources/projects/${image}`);
      });
      return await this.projectRepository.remove(project);
    } catch (error) {
      throw new ProjectNotFoundException("Can't delete project", 500);
    }
  }
}
