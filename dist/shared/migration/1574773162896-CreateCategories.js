"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../../categories/category.entity");
class CreateCategories1574773162896 {
    async up(queryRunner) {
        let category = new category_entity_1.Category();
        category.name = "web sites";
        category.createdAt = new Date();
        category.updatedAt = new Date();
        const categoryRepository = typeorm_1.getRepository(category_entity_1.Category);
        await categoryRepository.save(category);
    }
    async down(queryRunner) {
    }
}
exports.CreateCategories1574773162896 = CreateCategories1574773162896;
//# sourceMappingURL=1574773162896-CreateCategories.js.map