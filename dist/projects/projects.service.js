"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const project_entity_1 = require("./project.entity");
const typeorm_2 = require("typeorm");
const projectNotFoundException_exception_1 = require("./exception/projectNotFoundException.exception");
let ProjectsService = class ProjectsService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async getAllProjects() {
        let projects = [];
        try {
            projects = await this.projectRepository
                .createQueryBuilder('project')
                .leftJoinAndSelect('project.category', 'category')
                .leftJoinAndSelect('project.company', 'company')
                .leftJoinAndSelect('project.tags', 'tag')
                .getMany();
        }
        catch (error) {
            throw new projectNotFoundException_exception_1.ProjectNotFoundException(error.toString(), 500);
        }
        return projects;
    }
    async getProjectsByTag(tagId) {
        let projects = [];
        try {
            projects = await this.projectRepository
                .createQueryBuilder('project')
                .innerJoinAndSelect('project.tags', 'tag')
                .innerJoinAndSelect('project.tags', 'tag2')
                .leftJoinAndSelect('project.category', 'category')
                .where('tag.id = :id', { id: tagId })
                .getMany();
        }
        catch (error) {
            throw new projectNotFoundException_exception_1.ProjectNotFoundException(error.toString(), 500);
        }
        return projects;
    }
    async getProjectsByCategory(catId) {
        let projects = [];
        try {
            projects = await this.projectRepository
                .createQueryBuilder('project')
                .leftJoinAndSelect('project.category', 'category')
                .where('category.id = :id', { id: catId })
                .getMany();
        }
        catch (error) {
            throw new projectNotFoundException_exception_1.ProjectNotFoundException(error.toString(), 500);
        }
        return projects;
    }
    async saveProject(project) {
        try {
            return await this.projectRepository.save(project);
        }
        catch (error) {
            throw new projectNotFoundException_exception_1.ProjectNotFoundException(error.toString(), 500);
        }
    }
    async deleteProject(projectId) {
        try {
            let project = await this.projectRepository.findOne(projectId);
            const fs = require('fs');
            JSON.parse(project.images).forEach((image) => {
                fs.unlinkSync(`./client/resources/projects/${image}`);
            });
            return await this.projectRepository.remove(project);
        }
        catch (error) {
            throw new projectNotFoundException_exception_1.ProjectNotFoundException("Can't delete project", 500);
        }
    }
};
ProjectsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(project_entity_1.Project)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectsService);
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map