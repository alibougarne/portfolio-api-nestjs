"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const company_entity_1 = require("./company.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const companyNotFoundException_exception_1 = require("./exceptions/companyNotFoundException.exception");
let CompaniesService = class CompaniesService {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async getAllCompanies() {
        try {
            let companies = [];
            companies = await this.companyRepository
                .createQueryBuilder('company')
                .getMany();
            return companies;
        }
        catch (error) {
            throw new companyNotFoundException_exception_1.CompanyNotFoundException(error.toString(), 500);
        }
    }
    async saveCompany(company) {
        try {
            return await this.companyRepository.save(company);
        }
        catch (error) {
            throw new companyNotFoundException_exception_1.CompanyNotFoundException(error.toString(), 500);
        }
    }
    async deleteCompany(companyId) {
        try {
            return await this.companyRepository.delete(companyId);
        }
        catch (error) {
            throw new companyNotFoundException_exception_1.CompanyNotFoundException(error.toString(), 500);
        }
    }
};
CompaniesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(company_entity_1.Company)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CompaniesService);
exports.CompaniesService = CompaniesService;
//# sourceMappingURL=companies.service.js.map