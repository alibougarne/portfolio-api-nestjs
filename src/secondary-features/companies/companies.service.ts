import { Injectable } from '@nestjs/common';
import { Company } from './company.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyNotFoundException } from './exceptions/companyNotFoundException.exception';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}
  async getAllCompanies(): Promise<Company[]> {
    let projects: Company[] = [];
    try {
      projects = await this.companyRepository
        .createQueryBuilder('company')
        .getMany();
    } catch (error) {
      throw new CompanyNotFoundException(error.toString(), 500);
    }
    // console.log(projects);
    return projects;
  }
}
