import { ProjectsService } from './projects.service';
import { Project } from './project.entity';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    getAllProjects(): Promise<Project[]>;
    getProjectsByTagId(tagId: string): Promise<Project[]>;
    getProjectsByCategoryId(catId: any): Promise<Project[]>;
    createProject(payload: any, image: any): Promise<any>;
    editProject(payload: any, image: any): Promise<any>;
    deleteProject(projectId: string): Promise<Project>;
}
