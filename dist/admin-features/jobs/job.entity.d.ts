import { Common } from 'src/shared/entities/common';
import { Country } from 'src/admin-features/countries/country.entity';
import { Company } from 'src/admin-features/companies/company.entity';
import { Contact } from 'src/contacts/contact.entity';
export declare class Job extends Common {
    jobTitle: string;
    mission: string;
    beginDate: Date;
    endDate: Date;
    country: Country;
    company: Company;
    contacts: Contact[];
}
