import { MigrationInterface, QueryRunner } from "typeorm";
export declare class createCountries1574798195374 implements MigrationInterface {
    private countryRepository;
    up(queryRunner: QueryRunner): Promise<any>;
    createCountry(countries: any[]): void;
    down(queryRunner: QueryRunner): Promise<any>;
}
