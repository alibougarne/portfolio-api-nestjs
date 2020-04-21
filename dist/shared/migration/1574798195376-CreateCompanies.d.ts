import { MigrationInterface, QueryRunner } from 'typeorm';
declare type businessLineObject = {
    name: string;
    icon: string;
};
declare type companyType = {
    name: string;
    country: string;
    type: string;
    link: string;
    description: string;
    logoPath: string;
    beginDate: string;
    endDate: string;
    businessLines: businessLineObject[];
};
export declare class createCompanies1574798195376 implements MigrationInterface {
    private countryRepository;
    private companyRepository;
    private businessLineRepository;
    up(queryRunner: QueryRunner): Promise<any>;
    createCompany(companyName: companyType): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
export {};
