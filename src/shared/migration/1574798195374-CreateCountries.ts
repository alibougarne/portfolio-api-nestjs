import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Country } from "src/countries/country.entity";

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
            this.createCountry(countries);
        } catch (error) {
            throw error;
        }

    }
    createCountry(countries: any[]): void {
        countries.forEach(async (countryName: countryType) => {
            let country = new Country();
            country.name = countryName.name;
            country.code = countryName.code;
            await this.countryRepository.save(country);
        })
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
    }


}
