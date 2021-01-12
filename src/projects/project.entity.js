"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var category_entity_1 = require("../categories/category.entity");
var common_1 = require("../shared/entities/common");
var tag_entity_1 = require("../tags/tag.entity");
var company_entity_1 = require("../admin-features/companies/company.entity");
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column()
    ], Project.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], Project.prototype, "description");
    __decorate([
        typeorm_1.Column({ "default": 0 }),
        class_validator_1.Max(5)
    ], Project.prototype, "rating");
    __decorate([
        typeorm_1.Column({
            "default": null
        }),
        class_validator_1.Length(1, 20),
        class_validator_1.IsUrl(),
        class_validator_1.IsEmpty()
    ], Project.prototype, "link");
    __decorate([
        typeorm_1.Column({
            type: Date,
            name: 'begin-date'
        }),
        class_validator_1.IsDate()
    ], Project.prototype, "beginDate");
    __decorate([
        typeorm_1.Column({
            type: Date,
            name: 'end-date'
        })
    ], Project.prototype, "endDate");
    __decorate([
        typeorm_1.Column("simple-array", {
            "default": null
        })
    ], Project.prototype, "images");
    __decorate([
        typeorm_1.Column({
            name: 'main-image',
            "default": null
        })
    ], Project.prototype, "mainImage");
    __decorate([
        typeorm_1.ManyToOne(function (type) { return category_entity_1.Category; }, function (category) { return category.projects; })
    ], Project.prototype, "category");
    __decorate([
        typeorm_1.ManyToOne(function (type) { return company_entity_1.Company; }, function (company) { return company.projects; })
    ], Project.prototype, "company");
    __decorate([
        typeorm_1.ManyToMany(function (type) { return tag_entity_1.Tag; }, function (tag) { return tag.projects; })
    ], Project.prototype, "tags");
    Project = __decorate([
        typeorm_1.Entity('projects')
    ], Project);
    return Project;
}(common_1.Common));
exports.Project = Project;
