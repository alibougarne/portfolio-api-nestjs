import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { Category } from "../../categories/category.entity";

export class CreateCategories1574773162896 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const categories = ["web site", "web application", "design"]
        categories.forEach(async (name)=>{
            let category = new Category();
            category.name = name;
            category.createdAt = new Date();
            category.updatedAt = new Date();
            const categoryRepository = getRepository(Category);
            await categoryRepository.save(category);
        })
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
