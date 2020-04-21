import { Common } from 'src/shared/entities/common';
import { Country } from 'src/admin-features/countries/country.entity';
import { Contact } from 'src/contacts/contact.entity';
export declare class Education extends Common {
    diplomeName: string;
    establishmentName: string;
    description: string;
    social: string;
    beginDate: Date;
    endDate: Date;
    country: Country;
    contacts: Contact[];
}
