import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class createProjects1574798221692 implements MigrationInterface {
    private categoryRepository;
    private companyRepository;
    private projectRepository;
    private tagRepository;
    up(queryRunner: QueryRunner): Promise<any>;
    createProject(project: any): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
