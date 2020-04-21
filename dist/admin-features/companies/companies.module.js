"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const companies_controller_1 = require("./companies.controller");
const companies_service_1 = require("./companies.service");
const typeorm_1 = require("@nestjs/typeorm");
const company_entity_1 = require("./company.entity");
const platform_express_1 = require("@nestjs/platform-express");
let CompaniesModule = class CompaniesModule {
};
CompaniesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([company_entity_1.Company]), platform_express_1.MulterModule.register({
                dest: './client/resources/companies',
            })],
        controllers: [companies_controller_1.CompaniesController],
        providers: [companies_service_1.CompaniesService]
    })
], CompaniesModule);
exports.CompaniesModule = CompaniesModule;
//# sourceMappingURL=companies.module.js.map