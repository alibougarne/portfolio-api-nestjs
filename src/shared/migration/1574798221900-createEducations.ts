import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Country } from 'src/admin-features/countries/country.entity';
import { Education } from 'src/admin-features/educations/education.entity';

export class createEducation1574798221900 implements MigrationInterface {
  private educationtRepository = getRepository(Education);
  private countryRepository = getRepository(Country);
  public async up(queryRunner: QueryRunner): Promise<any> {
    let educations = [
      {
        country: 'Algeria',
        diplomeName: "Master's degree",
        establishmentName: "University of M'hammed Bougara, Boumerdes",
        webSite: 'https://www.univ-boumerdes.dz/',
        beginDate: new Date(2011, 9, 1),
        // description: "Master's degree in Computer science, Networking field",
        endDate: new Date(2013, 10, 1),
      },
      {
        country: 'Algeria',
        diplomeName: "Bachelor's degree",
        establishmentName: "University of M'hammed Bougara, Boumerdes",
        webSite: 'https://www.univ-boumerdes.dz/',
        // description: "Bachelor's degree in Computer science and Electronics",
        beginDate: new Date(2007, 9, 1),
        endDate: new Date(2011, 7, 1),
      },
    ];
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
      throw error;
    }
  }
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
