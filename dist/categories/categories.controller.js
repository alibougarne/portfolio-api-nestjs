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
const category_entity_1 = require("./category.entity");
const categories_service_1 = require("./categories.service");
let CategoriesController = class CategoriesController {
    constructor(categoriesServices) {
        this.categoriesServices = categoriesServices;
    }
    async getAllCategories() {
        return await this.categoriesServices.getAllCategories();
    }
    async createOrEditCategory(category) {
        return this.categoriesServices.saveCategory(category);
    }
    async deleteCategory(categoryId) {
        return await this.categoriesServices.deleteCategory(categoryId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getAllCategories", null);
__decorate([
    common_1.Post(),
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_entity_1.Category]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "createOrEditCategory", null);
__decorate([
    common_1.Delete(':categoryId'),
    __param(0, common_1.Param('categoryId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "deleteCategory", null);
CategoriesController = __decorate([
    common_1.Controller('categories'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map