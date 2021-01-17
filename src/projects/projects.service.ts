import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { ProjectNotFoundException } from './exception/projectNotFoundException.exception';
import Cloudinary from '../tools/cloudinary';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async getAllProjects(take?:number, skip?:number): Promise<[Project[], number]> {
    let result: [Project[], number];
    try {
      result = await this.projectRepository
        .createQueryBuilder('project')
        .leftJoinAndSelect('project.category', 'category')
        .leftJoinAndSelect('project.company', 'company')
        .leftJoinAndSelect('project.tags', 'tag')
        .take(take)
        .skip(skip)
        .getManyAndCount()
    } catch (error) {
      throw new ProjectNotFoundException(error.toString(), 500);
    }
    // console.log(projects);
    return result;
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

  async saveProject(project: Project, images: any[]): Promise<Project> {
    console.log('%c⧭ images ===> ', 'color: #364cd9', images);
    project.images = [];
    images.forEach((file: { originalname: string; filename: string }) => {
      if (project.mainImage === file.originalname) {
        project.mainImage = file.filename;
      }
      project.images.push(file.filename);
    });
    console.log('%c⧭ project to be save ==> ', 'color: #00b300', project);

    try {
      const cloudinary = new Cloudinary();
      if (project.id) {
        const proj = await this.projectRepository.findOne(project.id);
        console.log('%c⧭ proj from database ==> ', 'color: #ffa640', proj);
        if (proj.images.length)
          for (let image of proj.images) {
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
      }
      for (let image of images) {
        await cloudinary.save(
          image,
          'portfolio/projects',
          async (error: Error, result: any) => {
            console.log('%c⧭', 'color: #7f2200', result);
            if (error) {
              console.error('%c⧭', 'color: #731d6d', error);
              throw error;
            }
          },
        );
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
