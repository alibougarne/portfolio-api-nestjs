"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const business_line_entity_1 = require("../../admin-features/business-lines/business-line.entity");
class createBusinessLines1574798195375 {
    constructor() {
        this.businessLineRepository = typeorm_1.getRepository(business_line_entity_1.Businessline);
    }
    async up(queryRunner) {
        let countries = [
            { name: 'food processing', icon: 'mdi-food' },
            { name: 'household appliances', icon: 'mdi-monitor-speaker' },
            { name: 'heavy industry', icon: 'mdi-robot-industrial' },
            { name: 'freight transport', icon: 'mdi-train-car' },
            { name: 'public services', icon: 'mdi-home-city' },
            { name: 'air transport', icon: 'mdi-airplane' },
            { name: 'insurance', icon: 'mdi-account-heart' },
            { name: 'software engineering', icon: 'mdi-code-braces-box' },
        ];
        try {
            this.createBusinessline(countries);
        }
        catch (error) {
            throw error;
        }
    }
    createBusinessline(businessLines) {
        console.log('%c⧭', 'color: #0088cc', "======= createBusinessline begin ===== ");
        businessLines.forEach(async (businessLineName) => {
            let businessLine = new business_line_entity_1.Businessline();
            businessLine.name = businessLineName.name;
            businessLine.mdiIcon = businessLineName.icon;
            await this.businessLineRepository.save(businessLine);
        });
        console.log('%c⧭', 'color: #0088cc', "======= createBusinessline end ===== ");
    }
    async down(queryRunner) {
    }
}
exports.createBusinessLines1574798195375 = createBusinessLines1574798195375;
//# sourceMappingURL=1574798195375-CreateBusinessLines.js.map