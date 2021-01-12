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
var common_1 = require("../shared/entities/common");
var project_entity_1 = require("../projects/project.entity");
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(1, 20)
    ], Tag.prototype, "name");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(1, 20)
    ], Tag.prototype, "hashtag");
    __decorate([
        typeorm_1.Column({
            "default": null
        }),
        class_validator_1.Length(1, 50)
    ], Tag.prototype, "icon");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(1, 20),
        class_validator_1.IsUrl()
    ], Tag.prototype, "link");
    __decorate([
        typeorm_1.Column({
            "default": null
        }),
        class_validator_1.Length(5, 1000)
    ], Tag.prototype, "description");
    __decorate([
        typeorm_1.Column({
            name: "text-color",
            "default": "#fff"
        }),
        class_validator_1.Length(3, 6)
    ], Tag.prototype, "textColor");
    __decorate([
        typeorm_1.Column({
            name: "background-color",
            "default": "#ccc"
        }),
        class_validator_1.Length(3, 6)
    ], Tag.prototype, "backgroundColor");
    __decorate([
        typeorm_1.Column({
            name: "logo-path",
            "default": null
        })
    ], Tag.prototype, "logoPath");
    __decorate([
        typeorm_1.ManyToMany(function (type) { return project_entity_1.Project; }, function (project) { return project.tags; }),
        typeorm_1.JoinTable({ name: 'projects_tags' })
    ], Tag.prototype, "projects");
    Tag = __decorate([
        typeorm_1.Entity("tags")
    ], Tag);
    return Tag;
}(common_1.Common));
exports.Tag = Tag;
