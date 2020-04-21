import { MigrationInterface, QueryRunner } from "typeorm";
export declare class createTags1574798195378 implements MigrationInterface {
    private tagRepository;
    up(queryRunner: QueryRunner): Promise<any>;
    createTag(tags: any[]): void;
    down(queryRunner: QueryRunner): Promise<any>;
}
