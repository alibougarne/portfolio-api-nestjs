import { Controller, Get, Post, UseInterceptors, Body, UploadedFile, Put, Delete, Param } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from '../../tags/utils/file-upload.utils';
import { diskStorage } from 'multer';

@Controller('companies')
export class CompaniesController {
    constructor( private readonly companiesService:CompaniesService){}
    
    @Get()
    async getAllCompanies():Promise<Company[]>{
        return await this.companiesService.getAllCompanies();
    }

    @Post()
    @Put()
    @UseInterceptors(
      FileInterceptor('companyImage', {
        storage: diskStorage({
          destination: './client/resources/companies',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
      }),
    )
    async createOrEditCompany(
      @Body() payload: any,
      @UploadedFile() companyImage: any,
    ): Promise<Company> {
      const company: Company = <Company>JSON.parse(payload.company);
      company.logoPath = companyImage.filename;
      return this.companiesService.saveCompany(company);
    }

    @Delete(':companyId')
    async deleteCompany(@Param('companyId') companyId:string){
      return await this.companiesService.deleteCompany(companyId);
    }
}
