"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const country_entity_1 = require("../../admin-features/countries/country.entity");
const company_entity_1 = require("../../admin-features/companies/company.entity");
const business_line_entity_1 = require("../../admin-features/business-lines/business-line.entity");
class createCompanies1574798195376 {
    constructor() {
        this.countryRepository = typeorm_1.getRepository(country_entity_1.Country);
        this.companyRepository = typeorm_1.getRepository(company_entity_1.Company);
        this.businessLineRepository = typeorm_1.getRepository(business_line_entity_1.Businessline);
    }
    async up(queryRunner) {
        let companyList = [
            {
                name: 'Dypix',
                country: 'Algeria',
                type: 'private',
                link: 'https://dypix.com/',
                description: 'Algerian Web Agency, specializing in new user experiences: Websites, e-commerce, e-marketing and mobile',
                logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUP3T4ZAlG0AhyzILdZCZrE0ZX8seFVSRiTAwTWIo5VbvikIOmQ_jKD7yXsQ&s',
                beginDate: '2014-12-01',
                endDate: '2016-12-01',
                businessLines: [
                    { name: 'software engineering', icon: 'mdi-code-braces-box' },
                ],
            },
            {
                name: 'Brandt france',
                country: 'France',
                type: 'multinational',
                link: 'https://airalgerie.dz/',
                description: 'Brandt is the main brand of the Brandt Group. Brandt offers extensive product ranges in the fields of washing, cooking, cooling, small appliances, television and air conditioning.',
                logoPath: 'http://www.brandt.com/sites/brandt_international/files/brandt_anglais.png',
                beginDate: '2018-04-15',
                endDate: '2019-05-25',
                businessLines: [
                    { name: 'household appliances', icon: 'mdi-monitor-speaker' },
                ],
            },
            {
                name: 'Cevital Group',
                country: 'Algeria',
                type: 'multinational',
                link: 'https://www.cevital.com/',
                description: 'Cevital is a family-run Group whose success and reputation are rooted in its history, its track record and its values. As the first private Algerian company to have invested in a wide variety of business sectors, it has passed significant historical milestones to achieve the size and recognition it enjoys today.',
                logoPath: 'https://www.cevital.com/wp-content/themes/cevital/img/logo.svg',
                beginDate: '2018-04-15',
                endDate: '2019-05-25',
                businessLines: [
                    { name: 'food processing', icon: 'mdi-food' },
                    { name: 'heavy industry', icon: 'mdi-robot-industrial' },
                    { name: 'freight transport', icon: 'mdi-train-car' },
                ],
            },
            {
                name: 'Air Algérie',
                country: 'Algeria',
                type: 'government-owned',
                link: 'https://airalgerie.dz/',
                description: 'Public economic joint stock company EPE/SPA with a share capital of 60.000.000.000, 00 DZD, created in 1962, Air Algérie is the national airline. Air Algerie has produced an excellent commercial performance, according to the Medium-Term plan, it carries more than 6.1 million passengers annually with a fleet of 59 aircrafts',
                logoPath: 'https://airalgerie.dz/wp-content/uploads/2016/11/ah-logo.svg',
                beginDate: '2016-12-13',
                endDate: '2018-01-14',
                businessLines: [{ name: 'air transport', icon: 'mdi-airplane' }],
            },
            {
                name: 'Axa Algérie',
                country: 'France',
                type: 'multinational',
                link: 'https://axa.com/',
                description: 'AXA’s incredible adventure was born out of the dedication of a handful of men and women, led by Claude Bébéar, whose dream was to transform a small mutual insurer from Normandy into a world leader for insurance',
                logoPath: 'https://www.axa.com/base/images/logo.svg',
                beginDate: '2019-05-26',
                endDate: '2019-11-12',
                businessLines: [{ name: 'insurance', icon: 'mdi-account-heart' }],
            },
            {
                name: 'Yassir',
                country: 'Algeria',
                type: 'multinational',
                link: 'https://yassir.io/',
                description: 'Nous avons créé YASSIR autour de la conviction que lorsque les gens sont bien traités, ils fournissent un meilleur service',
                logoPath: 'https://yassir.io/wp-content/uploads/logo.svg',
                beginDate: '2019-11-19',
                endDate: '2019-11-19',
                businessLines: [{ name: 'public services', icon: 'mdi-home-city' }],
            },
        ];
        try {
            for (let companyName of companyList) {
                await this.createCompany(companyName);
            }
        }
        catch (error) {
            throw error;
        }
    }
    async createCompany(companyName) {
        console.log('%c⧭', 'color: #0088cc', '======= createCompany begin ===== ');
        let company = new company_entity_1.Company();
        let countries = [];
        let businesslines = [];
        company.name = companyName.name;
        company.type = companyName.type;
        company.link = companyName.link;
        company.description = companyName.description;
        company.logoPath = companyName.logoPath;
        company.beginDate = companyName.beginDate
            ? new Date(Date.parse(companyName.beginDate))
            : null;
        company.endDate = companyName.endDate
            ? new Date(Date.parse(companyName.endDate))
            : null;
        countries = await this.countryRepository.find({
            where: {
                name: companyName.country,
            },
        });
        if (countries[0]) {
            console.log('====== contry found', countries[0].code, company.name);
            company.country = countries[0];
        }
        else {
            let country = new country_entity_1.Country;
            country.name = companyName.country;
            country = await this.countryRepository.save(country);
            company.country = country;
        }
        for (let businessLineObject of companyName.businessLines) {
            let businessLinesFinded = [];
            let createBusinessLine = new business_line_entity_1.Businessline();
            businessLinesFinded = await this.businessLineRepository.find({
                where: { name: businessLineObject.name },
            });
            if (businessLinesFinded[0]) {
                createBusinessLine = businessLinesFinded[0];
                console.log('%c⧭ businessLinesFinded ====> ', 'color: #d90000', businessLinesFinded[0]);
            }
            else {
                createBusinessLine.createdAt = createBusinessLine.updatedAt = new Date();
                createBusinessLine.name = businessLineObject.name;
                createBusinessLine.mdiIcon = businessLineObject.icon;
                console.log('%c⧭', 'color: #0088cc', '======= createBusinessLine $$$$$$$$ not found ===== ', createBusinessLine.name);
                try {
                }
                catch (e) {
                }
            }
            console.log(`%c⧭ the businessLineObject  is 💩 ${businessLineObject.name}: `, 'color: #00a3cc', createBusinessLine);
            businesslines.push(createBusinessLine);
        }
        console.log('%c⧭', 'color: #0088cc', '======= company insertion ===== ', company.name);
        company.businesslines = businesslines;
        try {
            await this.companyRepository.save(company);
        }
        catch (e) {
            console.log('%c⧭ company: ', 'color: #917399', e);
        }
        console.log('%c⧭', 'color: #0088cc', '======= createCompany end ===== ');
    }
    async down(queryRunner) { }
}
exports.createCompanies1574798195376 = createCompanies1574798195376;
//# sourceMappingURL=1574798195376-CreateCompanies.js.map