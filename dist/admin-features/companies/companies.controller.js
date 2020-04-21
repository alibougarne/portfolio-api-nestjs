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
const companies_service_1 = require("./companies.service");
const platform_express_1 = require("@nestjs/platform-express");
const file_upload_utils_1 = require("../../tags/utils/file-upload.utils");
const multer_1 = require("multer");
let CompaniesController = class CompaniesController {
    constructor(companiesService) {
        this.companiesService = companiesService;
    }
    async getAllCompanies() {
        return await this.companiesService.getAllCompanies();
    }
    async createOrEditCompany(payload, companyImage) {
        const company = JSON.parse(payload.company);
        company.logoPath = companyImage.filename;
        return this.companiesService.saveCompany(company);
    }
    async deleteCompany(companyId) {
        return await this.companiesService.deleteCompany(companyId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "getAllCompanies", null);
__decorate([
    common_1.Post(),
    common_1.Put(),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('companyImage', {
        storage: multer_1.diskStorage({
            destination: './client/resources/companies',
            filename: file_upload_utils_1.editFileName,
        }),
        fileFilter: file_upload_utils_1.imageFileFilter,
    })),
    __param(0, common_1.Body()),
    __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "createOrEditCompany", null);
__decorate([
    common_1.Delete(':companyId'),
    __param(0, common_1.Param('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "deleteCompany", null);
CompaniesController = __decorate([
    common_1.Controller('companies'),
    __metadata("design:paramtypes", [companies_service_1.CompaniesService])
], CompaniesController);
exports.CompaniesController = CompaniesController;
//# sourceMappingURL=companies.controller.js.map