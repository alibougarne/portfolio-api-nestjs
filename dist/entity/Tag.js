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
const Commun_1 = require("./Commun");
const Project_1 = require("./Project");
let Tag = class Tag extends Commun_1.Commmun {
};
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 20),
    __metadata("design:type", String)
], Tag.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(4, 20),
    __metadata("design:type", String)
], Tag.prototype, "link", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 20),
    __metadata("design:type", String)
], Tag.prototype, "hashtag", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 20),
    __metadata("design:type", String)
], Tag.prototype, "backgroundColor", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 20),
    __metadata("design:type", String)
], Tag.prototype, "color", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 1000),
    __metadata("design:type", String)
], Tag.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 1000),
    __metadata("design:type", Number)
], Tag.prototype, "logoType", void 0);
__decorate([
    typeorm_1.ManyToMany(type => Project_1.Project, project => project.tags),
    typeorm_1.JoinTable({ name: 'projects_tags' }),
    __metadata("design:type", Array)
], Tag.prototype, "projects", void 0);
Tag = __decorate([
    typeorm_1.Entity()
], Tag);
exports.Tag = Tag;
var LogoType;
(function (LogoType) {
    LogoType[LogoType["Text"] = 0] = "Text";
    LogoType[LogoType["Image"] = 1] = "Image";
    LogoType[LogoType["TextAndImage"] = 2] = "TextAndImage";
})(LogoType = exports.LogoType || (exports.LogoType = {}));
//# sourceMappingURL=Tag.js.map