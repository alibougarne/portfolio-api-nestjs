import { Common } from '../../shared/entities/common';
import { Company } from 'src/admin-features/companies/company.entity';
export declare class Country extends Common {
    name: string;
    code: string;
    companies: Company[];
}
