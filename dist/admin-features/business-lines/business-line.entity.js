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
const common_1 = require("../../shared/entities/common");
const company_entity_1 = require("../companies/company.entity");
let Businessline = class Businessline extends common_1.Common {
};
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(4, 20),
    __metadata("design:type", String)
], Businessline.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        default: 'Lorum Ipsum sit amet Lorum Ipsum sit amet Lorum Ipsum sit amet'
    }),
    class_validator_1.IsEmpty(),
    class_validator_1.Length(0, 1000),
    __metadata("design:type", String)
], Businessline.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({
        name: 'mdi-icon',
    }),
    __metadata("design:type", String)
], Businessline.prototype, "mdiIcon", void 0);
__decorate([
    typeorm_1.ManyToMany(type => company_entity_1.Company, company => company.businesslines),
    __metadata("design:type", Array)
], Businessline.prototype, "companies", void 0);
Businessline = __decorate([
    typeorm_1.Entity("businesslines")
], Businessline);
exports.Businessline = Businessline;
//# sourceMappingURL=business-line.entity.js.map