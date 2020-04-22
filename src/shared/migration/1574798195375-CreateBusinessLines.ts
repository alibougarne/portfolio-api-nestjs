import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Businessline } from "src/admin-features/business-lines/business-line.entity";

interface businessLineType {
    name: string
    icon: string,
}
export class createBusinessLines1574798195375 implements MigrationInterface {
    private businessLineRepository = getRepository(Businessline);
    public async up(queryRunner: QueryRunner): Promise<any> {
        let countries:businessLineType[] = [
            { name: 'food processing', icon: 'mdi-food' },
            { name: 'household appliances', icon: 'mdi-monitor-speaker' },
            { name: 'heavy industry', icon: 'mdi-robot-industrial' },
            { name: 'freight transport', icon: 'mdi-train-car' },
            { name: 'public services', icon: 'mdi-home-city' },
            { name: 'air transport', icon: 'mdi-airplane' },
            { name: 'insurance', icon: 'mdi-account-heart' },
            { name: 'software engineering', icon: 'mdi-code-braces-box' },
          ]

        try {
            this.createBusinessline(countries);
        } catch (error) {
            throw error;
        }

    }
    createBusinessline(businessLines: any[]): void {
        console.log('%c⧭', 'color: #0088cc', "======= createBusinessline begin ===== ");

        businessLines.forEach(async (businessLineName: businessLineType) => {
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
