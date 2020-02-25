import { ProjectsService } from './projects.service';
import { Project } from './project.entity';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    getProjectsByTagId(tagId: string): Promise<Project[]>;
    getProjectsByCategoryId(catId: any): Promise<Project[]>;
}
