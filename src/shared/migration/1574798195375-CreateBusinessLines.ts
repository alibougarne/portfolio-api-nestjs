import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Businessline } from "src/admin-features/business-lines/business-line.entity";
import businessLines from './data/businessLines.json'
interface businessLineType {
    name: string
    icon: string,
}
export class createBusinessLines1574798195375 implements MigrationInterface {
    private businessLineRepository = getRepository(Businessline);
    public async up(queryRunner: QueryRunner): Promise<any> {
        try {
            this.createBusinessline(businessLines);
        } catch (error) {
            console.error('%c⧭ businessLines migration error', 'color: #1d3f73', error);
        }
    }
    createBusinessline(data: any[]): void {
        console.log('%c⧭', 'color: #0088cc', "======= createBusinessline begin ===== ");
        data.forEach(async (businessLineName: businessLineType) => {
            let businessLine = new Businessline();
            businessLine.name = businessLineName.name;
            businessLine.mdiIcon = businessLineName.icon;
            await this.businessLineRepository.save(businessLine);
        })
        console.log('%c⧭', 'color: #0088cc', "======= createBusinessline end ===== ");

    }
    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
