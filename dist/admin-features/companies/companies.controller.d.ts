import { CompaniesService } from './companies.service';
import { Company } from './company.entity';
export declare class CompaniesController {
    private readonly companiesService;
    constructor(companiesService: CompaniesService);
    getAllCompanies(): Promise<Company[]>;
    createOrEditCompany(payload: any, companyImage: any): Promise<Company>;
    deleteCompany(companyId: string): Promise<import("typeorm").DeleteResult>;
}
