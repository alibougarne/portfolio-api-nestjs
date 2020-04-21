import { Company } from './company.entity';
import { Repository, DeleteResult } from 'typeorm';
export declare class CompaniesService {
    private readonly companyRepository;
    constructor(companyRepository: Repository<Company>);
    getAllCompanies(): Promise<Company[]>;
    saveCompany(company: Company): Promise<Company>;
    deleteCompany(companyId: string): Promise<DeleteResult>;
}
