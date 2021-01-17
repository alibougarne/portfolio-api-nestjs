import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Country } from "src/admin-features/countries/country.entity";
import countries from './data/countries.json'
type countryType =  {
    name: string,
    code: string
}
export class createCountries1574798195374 implements MigrationInterface {
    private countryRepository = getRepository(Country);
    public async up(queryRunner: QueryRunner): Promise<any> {
        try {
            await this.createCountry(countries);
        }catch (error) {
            console.log('%c⧭ error creating countries ===>', 'color: #bf0010', error);
        }
    }
    async createCountry(countries_: any[]): Promise<void> {
        console.log('%c⧭', 'color: #0088cc', "======= createCountry begin ===== ");
        countries_.forEach(async (countryName: countryType) => {
            const country = new Country();
            country.code = countryName.code;
            country.name = countryName.name;
            console.log('%c⧭ country ===> ', 'color: #0088cc', "======= createCountry end ===== ",country);
            await this.countryRepository.save(country);

        })

    }
    public async down(queryRunner: QueryRunner): Promise<any> {
    }


}
