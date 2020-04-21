import { Common } from '../shared/entities/common';
import { Country } from 'src/admin-features/countries/country.entity';
import { Education } from 'src/admin-features/educations/education.entity';
import { Job } from 'src/admin-features/jobs/job.entity';
export declare class Contact extends Common {
    name: string;
    lastName: string;
    slogan: string;
    description: string;
    phones: string;
    languages: string;
    birthday: Date;
    country: Country;
    educations: Education[];
    jobs: Job[];
}
