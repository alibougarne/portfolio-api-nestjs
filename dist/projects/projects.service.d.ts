import { Project } from './project.entity';
import { Repository } from 'typeorm';
export declare class ProjectsService {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Project>);
    getProjectsByTag(tagId: string): Promise<Project[]>;
    getProjectsByCategory(catId: number): Promise<Project[]>;
}
