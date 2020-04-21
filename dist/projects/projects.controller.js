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
const projects_service_1 = require("./projects.service");
const projectNotFoundException_exception_1 = require("./exception/projectNotFoundException.exception");
const platform_express_1 = require("@nestjs/platform-express");
const file_upload_utils_1 = require("../tags/utils/file-upload.utils");
const multer_1 = require("multer");
let ProjectsController = class ProjectsController {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    async getAllProjects() {
        let projects = [];
        projects = await this.projectsService.getAllProjects();
        if (!projects.length)
            throw new projectNotFoundException_exception_1.ProjectNotFoundException('Sorry, No project found', 500);
        return projects;
    }
    async getProjectsByTagId(tagId) {
        let projects = [];
        projects = await this.projectsService.getProjectsByTag(tagId);
        if (!projects.length)
            throw new projectNotFoundException_exception_1.ProjectNotFoundException('Sorry, No project found', 500);
        return projects;
    }
    async getProjectsByCategoryId(catId) {
        let projects = [];
        projects = await this.projectsService.getProjectsByCategory(catId);
        if (!projects.length)
            throw new projectNotFoundException_exception_1.ProjectNotFoundException('Sorry, No project found', 500);
        return projects;
    }
    async createProject(payload, image) {
        const project = JSON.parse(payload.project);
        const images = [];
        image.forEach(file => {
            if (project.mainImage === file.originalname) {
                project.mainImage = file.filename;
            }
            images.push(file.filename);
        });
        return await this.projectsService.saveProject(Object.assign(Object.assign({}, project), { images: JSON.stringify(images) }));
    }
    async editProject(payload, image) {
        const project = JSON.parse(payload.project);
        const images = [];
        image.forEach(file => {
            if (project.mainImage === file.originalname) {
                project.mainImage = file.filename;
            }
            images.push(file.filename);
        });
        return await this.projectsService.saveProject(Object.assign(Object.assign({}, project), { images: JSON.stringify(images) }));
    }
    async deleteProject(projectId) {
        return await this.projectsService.deleteProject(projectId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getAllProjects", null);
__decorate([
    common_1.Get('tag/:tagId'),
    __param(0, common_1.Param('tagId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getProjectsByTagId", null);
__decorate([
    common_1.Get('category/:catId'),
    __param(0, common_1.Param('catId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getProjectsByCategoryId", null);
__decorate([
    common_1.Post(),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('image', 20, {
        storage: multer_1.diskStorage({
            destination: './client/resources/projects',
            filename: file_upload_utils_1.editFileName,
        }),
        fileFilter: file_upload_utils_1.imageFileFilter,
    })),
    __param(0, common_1.Body()),
    __param(1, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "createProject", null);
__decorate([
    common_1.Put(),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('image', 20, {
        storage: multer_1.diskStorage({
            destination: './client/resources/projects',
            filename: file_upload_utils_1.editFileName,
        }),
        fileFilter: file_upload_utils_1.imageFileFilter,
    })),
    __param(0, common_1.Body()),
    __param(1, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "editProject", null);
__decorate([
    common_1.Delete(':projectId'),
    __param(0, common_1.Param('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "deleteProject", null);
ProjectsController = __decorate([
    common_1.Controller('projects'),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
exports.ProjectsController = ProjectsController;
//# sourceMappingURL=projects.controller.js.map