import { Common } from '../../shared/entities/common';
import { Company } from 'src/admin-features/companies/company.entity';
export declare class Businessline extends Common {
    name: string;
    description: string;
    mdiIcon: string;
    companies: Company[];
}
