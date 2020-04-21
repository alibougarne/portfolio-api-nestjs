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
const common_1 = require("../shared/entities/common");
const project_entity_1 = require("../projects/project.entity");
let Tag = class Tag extends common_1.Common {
};
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 20),
    __metadata("design:type", String)
], Tag.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 20),
    __metadata("design:type", String)
], Tag.prototype, "hashtag", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 50),
    __metadata("design:type", String)
], Tag.prototype, "icon", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 20),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], Tag.prototype, "link", void 0);
__decorate([
    typeorm_1.Column({
        default: null
    }),
    class_validator_1.Length(5, 1000),
    __metadata("design:type", String)
], Tag.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({
        name: "text-color",
        default: "#fff"
    }),
    class_validator_1.Length(3, 6),
    __metadata("design:type", String)
], Tag.prototype, "textColor", void 0);
__decorate([
    typeorm_1.Column({
        name: "background-color",
        default: "#ccc"
    }),
    class_validator_1.Length(3, 6),
    __metadata("design:type", String)
], Tag.prototype, "backgroundColor", void 0);
__decorate([
    typeorm_1.Column({
        name: "logo-path",
        default: null
    }),
    __metadata("design:type", String)
], Tag.prototype, "logoPath", void 0);
__decorate([
    typeorm_1.ManyToMany(type => project_entity_1.Project, project => project.tags),
    typeorm_1.JoinTable({ name: 'projects_tags' }),
    __metadata("design:type", Array)
], Tag.prototype, "projects", void 0);
Tag = __decorate([
    typeorm_1.Entity("tags")
], Tag);
exports.Tag = Tag;
//# sourceMappingURL=tag.entity.js.map