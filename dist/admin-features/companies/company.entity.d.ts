import { Project } from '../../projects/project.entity';
import { Common } from '../../shared/entities/common';
import { Businessline } from 'src/admin-features/business-lines/business-line.entity';
import { Country } from 'src/admin-features/countries/country.entity';
export declare class Company extends Common {
    name: string;
    link: string;
    type: string;
    description: string;
    beginDate: Date;
    endDate: Date;
    logoPath: string;
    country: Country;
    projects: Project[];
    businesslines: Businessline[];
}
