import { Category } from '../categories/category.entity';
import { Common } from '../shared/entities/common';
import { Tag } from '../tags/tag.entity';
import { Company } from 'src/admin-features/companies/company.entity';
export declare class Project extends Common {
    name: string;
    description: string;
    rating: number;
    link: string;
    beginDate: Date;
    endDate: Date;
    images: string;
    mainImage: string;
    category: Category;
    company: Company;
    tags: Tag[];
}
