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
const country_entity_1 = require("../countries/country.entity");
const contact_entity_1 = require("../../contacts/contact.entity");
let Education = class Education extends common_1.Common {
};
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 200),
    __metadata("design:type", String)
], Education.prototype, "diplomeName", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 200),
    __metadata("design:type", String)
], Education.prototype, "establishmentName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Education.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Education.prototype, "social", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date',
    }),
    __metadata("design:type", Date)
], Education.prototype, "beginDate", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date',
        default: null,
    }),
    __metadata("design:type", Date)
], Education.prototype, "endDate", void 0);
__decorate([
    typeorm_1.OneToOne(type => country_entity_1.Country),
    typeorm_1.JoinColumn(),
    __metadata("design:type", country_entity_1.Country)
], Education.prototype, "country", void 0);
__decorate([
    typeorm_1.ManyToMany(type => contact_entity_1.Contact, contact => contact.educations),
    __metadata("design:type", Array)
], Education.prototype, "contacts", void 0);
Education = __decorate([
    typeorm_1.Entity("educations")
], Education);
exports.Education = Education;
//# sourceMappingURL=education.entity.js.map