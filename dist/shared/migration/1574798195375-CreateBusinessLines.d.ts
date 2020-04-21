import { MigrationInterface, QueryRunner } from "typeorm";
export declare class createBusinessLines1574798195375 implements MigrationInterface {
    private businessLineRepository;
    up(queryRunner: QueryRunner): Promise<any>;
    createBusinessline(businessLines: any[]): void;
    down(queryRunner: QueryRunner): Promise<any>;
}
