import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Country } from "src/admin-features/countries/country.entity";

type countryType =  {
    name: string,
    code: string
}
export class createCountries1574798195374 implements MigrationInterface {
    private countryRepository = getRepository(Country);
    public async up(queryRunner: QueryRunner): Promise<any> {
        let countries:countryType[] = [
            {
                name: 'Algeria',
                code: 'dz',
            },
            {
                name: 'United states of america',
                code: 'us',
            },
            {
                name: 'France',
                code: 'fr',
            }
        ]

        try {
            await this.createCountry(countries);
        } catch (error) {
            throw error;
        }

    }
    async createCountry(countries: any[]): Promise<void> {
        console.log('%c⧭', 'color: #0088cc', "======= createCountry begin ===== ");

        countries.forEach(async (countryName: countryType) => {
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
