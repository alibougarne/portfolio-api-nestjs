import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { ProjectNotFoundException } from './exception/projectNotFoundException.exception';
import Cloudinary from '../tools/cloudinary';
import { ProjectDto } from './dto/projectDto.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  /**
   * get all projects with optionnal pagination
   * @param {number} take take pagination param @optionnal
   * @param {number} skip skip pagination param @optionnal
   * @return {{ list: ProjectDto[]; count: number }}
   * @throw ProjectNotFoundException error
   */
  async getAllProjects(
    take?: number,
    skip?: number,
  ): Promise<{ list: ProjectDto[]; count: number }> {
    let result: [Project[], number];
    let projectDtos: ProjectDto[] = [];
    try {
      result = await this.projectRepository
        .createQueryBuilder('project')
        .leftJoinAndSelect('project.category', 'category')
        .leftJoinAndSelect('project.company', 'company')
        .leftJoinAndSelect('project.tags', 'tag')
        .take(take)
        .skip(skip)
        .getManyAndCount();
      projectDtos = await this.getProjectImgUrl(result[0]);
    } catch (error) {
      throw new ProjectNotFoundException(error.toString(), 500);
    }
    return { list: projectDtos, count: result[1] };
  }

  async getProjectsByTag(tagId: string): Promise<{ list: ProjectDto[]; count: number }> {
    let result: [Project[], number];
    let projectDtos: ProjectDto[] = [];
    try {
      result = await this.projectRepository
        .createQueryBuilder('project')
        .innerJoinAndSelect('project.tags', 'tag')
        .innerJoinAndSelect('project.tags', 'tag2')
        .leftJoinAndSelect('project.category', 'category')
        .where('tag.id = :id', { id: tagId })
        .getManyAndCount();
        projectDtos = await this.getProjectImgUrl(result[0]);
    } catch (error) {
      throw new ProjectNotFoundException(error.toString(), 500);
    }
    return { list: projectDtos, count: result[1] };
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
    project.images = [];
    images.forEach((file: { originalname: string; filename: string }) => {
      if (project.mainImage === file.originalname) {
        project.mainImage = file.filename;
      }
      project.images.push(file.filename);
    });
    try {
      const cloudinary = new Cloudinary();
      if (project.id) {
        const proj = await this.projectRepository.findOne(project.id);
        if (proj.images && proj.images.length) {
          await cloudinary.deleteImage(
            proj.images.map((image: string) => `portfolio/projects/${image}`),
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
  /**
   * delete a specific project
   * @TODO  delete a given image in a separate function
   * @param  {string} projectId array of projects
   * @return {void}
   */
  async deleteProject(projectId: string) {
    try {
      let project = await this.projectRepository.findOne(projectId);
      const cloudinary = new Cloudinary();
      await cloudinary.deleteImage(
        project.images.map((image: string) => `portfolio/projects/${image}`),
        async (error: Error, result: any) => {
          if (error) {
            console.error('%c⧭', 'color: #731d6d', error);
            throw error;
          }
        },
      );
      const fs = require('fs');
      project.images.forEach((image: string) => {
        fs.unlinkSync(`./client/resources/projects/${image}`);
      });
      return await this.projectRepository.remove(project);
    } catch (error) {
      throw new ProjectNotFoundException("Can't delete project", 500);
    }
  }

  /**
   * get projects with cloudinary url within each entity if the entity contains a mainImage
   * @param  {Project[]} projects array of projects
   * @return {Promise<ProjectDto[]>}
   */
  async getProjectImgUrl(projects: Project[]): Promise<ProjectDto[]> {
    // check if the url image prefix is already extracted
    let cloudImageUrlPrefix: string;
    const cloudinary = new Cloudinary();
    let projectDtos: ProjectDto[] = [];
    for (let project of projects) {
      // check if the project already have a main page
      // check if the url image prefix is already extracted
      if (project.mainImage && !cloudImageUrlPrefix) {
        const cloudImageUrl = await cloudinary.getCloudinaryUploadedFile(
          project.mainImage,
          'projects',
        );
        cloudImageUrlPrefix = cloudImageUrl.split(
          cloudImageUrl.split('/')[cloudImageUrl.split('/').length - 1],
        )[0];
      }
      // push the project dto into projectsDtos list
      projectDtos.push({
        ...project,
        cloudImageUrlPrefix,
      });
    }
    return projectDtos;
  }
}
