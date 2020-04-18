import { Controller, Get, Param, Post, UseInterceptors, Body, UploadedFile, UploadedFiles, Put } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './project.entity';
import { ProjectNotFoundException } from './exception/projectNotFoundException.exception';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from 'src/tags/utils/file-upload.utils';
import { diskStorage } from 'multer';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService) { }

    @Get()
    async getAllProjects(): Promise<Project[]> {
        let projects: Project[] = [];
        projects = await this.projectsService.getAllProjects();
        if (!projects.length) throw new ProjectNotFoundException('Sorry, No project found', 500);
        return projects;
    }

    @Get('tag/:tagId')
    async getProjectsByTagId(@Param('tagId') tagId:string): Promise<Project[]> {
        let projects: Project[] = [];
        projects = await this.projectsService.getProjectsByTag(tagId);
        if (!projects.length) throw new ProjectNotFoundException('Sorry, No project found', 500);
        return projects;
    }

    @Get('category/:catId')
    async getProjectsByCategoryId(@Param('catId') catId): Promise<Project[]> {
        let projects: Project[] = [];
        projects = await this.projectsService.getProjectsByCategory(catId);
        if (!projects.length) throw new ProjectNotFoundException('Sorry, No project found', 500);
        return projects;
    }

    @Post()
    @UseInterceptors(
      FilesInterceptor('image', 20, {
        storage: diskStorage({
          destination: './client/resources/projects',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
      }),
    )
    async createProject(
      @Body() payload: any,
      @UploadedFiles() image: any,
    ): Promise<any> {
      const project: Project = <Project>JSON.parse(payload.project);
      const response = [];
      image.forEach(file => {
        const fileReponse = {
          originalname: file.originalname,
          filename: file.filename,
        };
        response.push(fileReponse);
      });
      console.log('%c⧭', 'color: #99614d', response);
      return response;
    }

    @Put()
    @UseInterceptors(
      FileInterceptor('projectImages', {
        storage: diskStorage({
          destination: './client/resources/projects',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
      }),
    )
    async editProject(
      @Body() payload: any,
      @UploadedFiles() projectImages: any,
    ): Promise<Project> {
      const project: Project = <Project>JSON.parse(payload.project);
      console.log('%c⧭', 'color: #364cd9', project);
      console.log('%c⧭', 'color: #00b300', projectImages);
      return project;
    }
}
