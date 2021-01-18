import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Country } from '../../admin-features/countries/country.entity';
import { Job } from '../../admin-features/jobs/job.entity';
import { Company } from '../../admin-features/companies/company.entity';
import jobs from './data/jobs.json'
export class createJobs1574798221901 implements MigrationInterface {
  private jobRepository = getRepository(Job);
  private countryRepository = getRepository(Country);
  private companyRepository = getRepository(Company);
  public async up(queryRunner: QueryRunner): Promise<any> {
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
      console.error('%c⧭ error jobs migrations ===> ', 'color: #408059', error);
    }
  }
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
