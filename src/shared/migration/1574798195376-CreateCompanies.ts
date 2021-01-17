import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { Country } from '../../admin-features/countries/country.entity';
import { Company } from '../../admin-features/companies/company.entity';
import { Businessline } from '../../admin-features/business-lines/business-line.entity';
 import companyList from './data/companies.json'
type businessLineObject = {
  name: string;
  icon: string;
};
type companyType = {
  name: string;
  country: string;
  type: string;
  link: string;
  description: string;
  logoPath: string;
  beginDate: string;
  endDate: string;
  businessLines: businessLineObject[];
};

export class createCompanies1574798195376 implements MigrationInterface {
  private countryRepository = getRepository(Country);
  private companyRepository = getRepository(Company);
  private businessLineRepository = getRepository(Businessline);

  public async up(queryRunner: QueryRunner): Promise<any> {
    try {
      for (let companyName of companyList) {
        await this.createCompany(companyName);
      }
    } catch (error) {
      console.error('%c⧭ companies migration error ==> ', 'color: #735656', error);
    }
  }
  async createCompany(companyName: companyType): Promise<any> {
    console.log('%c⧭', 'color: #0088cc', '======= createCompany begin ===== ');
    // companyList.forEach(async (companyName: companyType) => {

    let company:Company = new Company();
    let countries: Country[]=[];
    let businesslines : Businessline[]=[];

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
    } else {
      let country: Country= new Country;
      country.name = companyName.country;
      country = await this.countryRepository.save(country);
      company.country = country;
    }

    for (let businessLineObject of companyName.businessLines) {
      let businessLinesFinded: Businessline[]=[];
      let createBusinessLine: Businessline = new Businessline();
      businessLinesFinded = await this.businessLineRepository.find({
        where: { name: businessLineObject.name },
      });
      if (businessLinesFinded[0]) {
        createBusinessLine = businessLinesFinded[0];
        console.log('%c⧭ businessLinesFinded ====> ', 'color: #d90000', businessLinesFinded[0]);
      } else {
        createBusinessLine.createdAt = createBusinessLine.updatedAt = new Date();
        createBusinessLine.name = businessLineObject.name;
        createBusinessLine.mdiIcon = businessLineObject.icon;
        console.log(
          '%c⧭',
          'color: #0088cc',
          '======= createBusinessLine $$$$$$$$ not found ===== ',
          createBusinessLine.name,
        );
        try {
          // await this.businessLineRepository.save(createBusinessLine);
        } catch (e) {
          // console.log('%c⧭ createBusinessLine ', 'color: #917399',createBusinessLine, e);
        }
      }
      console.log(`%c⧭ the businessLineObject  is 💩 ${businessLineObject.name}: `, 'color: #00a3cc', createBusinessLine);

      businesslines.push(createBusinessLine);
    }
    console.log(
      '%c⧭',
      'color: #0088cc',
      '======= company insertion ===== ',
      company.name,
    );
    company.businesslines = businesslines;
    try {
      await this.companyRepository.save(company);
    } catch (e) {
      console.log('%c⧭ company: ', 'color: #917399', e);
    }
    console.log('%c⧭', 'color: #0088cc', '======= createCompany end ===== ');
    // }
    // );
  }
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
