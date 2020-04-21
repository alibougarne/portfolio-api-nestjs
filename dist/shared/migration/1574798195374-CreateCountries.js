"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const country_entity_1 = require("../../admin-features/countries/country.entity");
class createCountries1574798195374 {
    constructor() {
        this.countryRepository = typeorm_1.getRepository(country_entity_1.Country);
    }
    async up(queryRunner) {
        let countries = [
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
        ];
        try {
            this.createCountry(countries);
        }
        catch (error) {
            throw error;
        }
    }
    createCountry(countries) {
        console.log('%c⧭', 'color: #0088cc', "======= createCountry begin ===== ");
        countries.forEach(async (countryName) => {
            let country = new country_entity_1.Country();
            country.name = countryName.name;
            country.code = countryName.code;
            await this.countryRepository.save(country);
        });
        console.log('%c⧭', 'color: #0088cc', "======= createCountry end ===== ");
    }
    async down(queryRunner) {
    }
}
exports.createCountries1574798195374 = createCountries1574798195374;
//# sourceMappingURL=1574798195374-CreateCountries.js.map