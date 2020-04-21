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
const category_entity_1 = require("./category.entity");
const CategoryNotFoundException_exception_1 = require("./exceptions/CategoryNotFoundException.exception");
const typeorm_2 = require("typeorm");
let CategoriesService = class CategoriesService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async getAllCategories() {
        try {
            let categories = [];
            categories = await this.categoryRepository
                .createQueryBuilder('category')
                .getMany();
            return categories;
        }
        catch (error) {
            throw new CategoryNotFoundException_exception_1.CategoryNotFoundException(error.toString(), 500);
        }
    }
    async saveCategory(category) {
        try {
            return await this.categoryRepository.save(category);
        }
        catch (error) {
            throw new CategoryNotFoundException_exception_1.CategoryNotFoundException(error.toString(), 500);
        }
    }
    async deleteCategory(categoryId) {
        try {
            return await this.categoryRepository.delete(categoryId);
        }
        catch (error) {
            throw new CategoryNotFoundException_exception_1.CategoryNotFoundException(error.toString(), 500);
        }
    }
};
CategoriesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map