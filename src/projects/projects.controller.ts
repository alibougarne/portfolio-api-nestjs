import { Controller, Get, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './project.entity';
import { ProjectNotFoundException } from './exception/projectNotFoundException.exception';

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
}
