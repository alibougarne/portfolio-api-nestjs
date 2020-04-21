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
const company_entity_1 = require("../admin-features/companies/company.entity");
let Project = class Project extends common_1.Common {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    class_validator_1.Max(5),
    __metadata("design:type", Number)
], Project.prototype, "rating", void 0);
__decorate([
    typeorm_1.Column({
        default: null,
    }),
    class_validator_1.Length(1, 20),
    class_validator_1.IsUrl(),
    class_validator_1.IsEmpty(),
    __metadata("design:type", String)
], Project.prototype, "link", void 0);
__decorate([
    typeorm_1.Column({
        type: Date,
        name: 'begin-date',
    }),
    class_validator_1.IsDate(),
    __metadata("design:type", Date)
], Project.prototype, "beginDate", void 0);
__decorate([
    typeorm_1.Column({
        type: Date,
        name: 'end-date',
    }),
    __metadata("design:type", Date)
], Project.prototype, "endDate", void 0);
__decorate([
    typeorm_1.Column({
        default: null,
    }),
    __metadata("design:type", String)
], Project.prototype, "images", void 0);
__decorate([
    typeorm_1.Column({
        name: 'main-image',
        default: null,
    }),
    __metadata("design:type", String)
], Project.prototype, "mainImage", void 0);
__decorate([
    typeorm_1.ManyToOne(type => category_entity_1.Category, category => category.projects),
    __metadata("design:type", category_entity_1.Category)
], Project.prototype, "category", void 0);
__decorate([
    typeorm_1.ManyToOne(type => company_entity_1.Company, company => company.projects),
    __metadata("design:type", company_entity_1.Company)
], Project.prototype, "company", void 0);
__decorate([
    typeorm_1.ManyToMany(type => tag_entity_1.Tag, tag => tag.projects),
    __metadata("design:type", Array)
], Project.prototype, "tags", void 0);
Project = __decorate([
    typeorm_1.Entity('projects')
], Project);
exports.Project = Project;
//# sourceMappingURL=project.entity.js.map