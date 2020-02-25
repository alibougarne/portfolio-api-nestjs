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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const category_entity_1 = require("../categories/category.entity");
const common_1 = require("../shared/entities/common");
const tag_entity_1 = require("../tags/tag.entity");
let Project = class Project extends common_1.Common {
};
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(4, 20),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(4, 1500),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    class_validator_1.Max(5),
    __metadata("design:type", Number)
], Project.prototype, "rating", void 0);
__decorate([
    typeorm_1.ManyToOne(type => category_entity_1.Category, category => category.projects),
    __metadata("design:type", category_entity_1.Category)
], Project.prototype, "category", void 0);
__decorate([
    typeorm_1.ManyToMany(type => tag_entity_1.Tag, tag => tag.projects),
    typeorm_1.JoinTable({ name: 'projects_tags' }),
    __metadata("design:type", Array)
], Project.prototype, "tags", void 0);
Project = __decorate([
    typeorm_1.Entity()
], Project);
exports.Project = Project;
//# sourceMappingURL=project.entity.js.map