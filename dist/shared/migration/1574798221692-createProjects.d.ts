import { MigrationInterface, QueryRunner } from "typeorm";
export declare class createProjects1574798221692 implements MigrationInterface {
    private categoryRepository;
    private projectRepository;
    private tagRepository;
    up(queryRunner: QueryRunner): Promise<any>;
    createProject(projects: any): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
