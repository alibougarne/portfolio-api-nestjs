"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const projects_controller_1 = require("./projects.controller");
const project_entity_1 = require("./project.entity");
const typeorm_1 = require("@nestjs/typeorm");
const platform_express_1 = require("@nestjs/platform-express");
let ProjectsModule = class ProjectsModule {
};
ProjectsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([project_entity_1.Project]), platform_express_1.MulterModule.register({
                dest: './client/resources/projects',
            })],
        providers: [projects_service_1.ProjectsService],
        controllers: [projects_controller_1.ProjectsController]
    })
], ProjectsModule);
exports.ProjectsModule = ProjectsModule;
//# sourceMappingURL=projects.module.js.map