import { Controller, Get } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';

@Controller('companies')
export class CompaniesController {
    constructor( private readonly companiesService:CompaniesService){}
    
    @Get()
    async getAllCompanies():Promise<Company[]>{
        return await this.companiesService.getAllCompanies();
        
    }
}
