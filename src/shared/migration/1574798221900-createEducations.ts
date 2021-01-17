import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Country } from '../../admin-features/countries/country.entity';
import { Education } from '../../admin-features/educations/education.entity';
import educations from './data/educations.json'
export class createEducation1574798221900 implements MigrationInterface {
  private educationtRepository = getRepository(Education);
  private countryRepository = getRepository(Country);
  public async up(queryRunner: QueryRunner): Promise<any> {
    try {
      for (let education of educations) {
        let tempEduc = {
          ...education,
          country: await this.countryRepository.findOne({
            name: education.country,
          }),
        };
        await this.educationtRepository.save(tempEduc);
      }
    } catch (error) {
      console.error('%c⧭ error educations migration ==> ', 'color: #ffcc00', error);
    }
  }
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
