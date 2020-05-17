import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Country } from 'src/admin-features/countries/country.entity';
import { Job } from 'src/admin-features/jobs/job.entity';
import { Company } from 'src/admin-features/companies/company.entity';

export class createJobs1574798221901 implements MigrationInterface {
  private jobRepository = getRepository(Job);
  private countryRepository = getRepository(Country);
  private companyRepository = getRepository(Company);
  public async up(queryRunner: QueryRunner): Promise<any> {
    let jobs=[{
      jobTitle : "Web developer",
      mission : "create and maintain web sites",
      company : "Dypix",
      country : "Algeria",
      beginDate:new Date(2014, 12, 1),
      endDate:new Date(2016,12, 1),
    },
    {
      jobTitle : "Software Enginner",
      mission : "create and maintain applications for employees of Algeria airways",
      company : "Air Algérie",
      country : "Algeria",
      beginDate:new Date(2016,12, 13),
      endDate:new Date(2018,1, 14),
    }] 

    try {
      for (let job of jobs) {
        await this.jobRepository.save({
          ...job,
          country: await this.countryRepository.findOne({
            name: job.country,
          }),
          company: await this.companyRepository.findOne({
            name: job.company,
          }),
        });
      }
    } catch (error) {
      throw error;
    }
  }
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
