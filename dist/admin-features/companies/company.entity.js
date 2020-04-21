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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const project_entity_1 = require("../../projects/project.entity");
const common_1 = require("../../shared/entities/common");
const business_line_entity_1 = require("../business-lines/business-line.entity");
const country_entity_1 = require("../countries/country.entity");
let Company = class Company extends common_1.Common {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsUrl(),
    __metadata("design:type", String)
], Company.prototype, "link", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(2, 50),
    __metadata("design:type", String)
], Company.prototype, "type", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Company.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({
        type: "date",
        name: 'begin-date',
    }),
    __metadata("design:type", Date)
], Company.prototype, "beginDate", void 0);
__decorate([
    typeorm_1.Column({
        type: "date",
        name: 'end-date',
        default: null
    }),
    __metadata("design:type", Date)
], Company.prototype, "endDate", void 0);
__decorate([
    typeorm_1.Column({
        name: 'logo-path',
    }),
    __metadata("design:type", String)
], Company.prototype, "logoPath", void 0);
__decorate([
    typeorm_1.ManyToOne(type => country_entity_1.Country, country => country.companies),
    __metadata("design:type", country_entity_1.Country)
], Company.prototype, "country", void 0);
__decorate([
    typeorm_1.OneToMany(() => project_entity_1.Project, project => project.company),
    __metadata("design:type", Array)
], Company.prototype, "projects", void 0);
__decorate([
    typeorm_1.ManyToMany(type => business_line_entity_1.Businessline, businessline => businessline.companies),
    typeorm_1.JoinTable({ name: 'companies_businesslines' }),
    __metadata("design:type", Array)
], Company.prototype, "businesslines", void 0);
Company = __decorate([
    typeorm_1.Entity("companies")
], Company);
exports.Company = Company;
//# sourceMappingURL=company.entity.js.map