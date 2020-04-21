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
const common_1 = require("../shared/entities/common");
const country_entity_1 = require("../admin-features/countries/country.entity");
const education_entity_1 = require("../admin-features/educations/education.entity");
const job_entity_1 = require("../admin-features/jobs/job.entity");
let Contact = class Contact extends common_1.Common {
};
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 50),
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(1, 50),
    __metadata("design:type", String)
], Contact.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "slogan", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "phones", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "languages", void 0);
__decorate([
    typeorm_1.Column({
        type: "date"
    }),
    class_validator_1.Length(1, 50),
    __metadata("design:type", Date)
], Contact.prototype, "birthday", void 0);
__decorate([
    typeorm_1.OneToOne(type => country_entity_1.Country),
    typeorm_1.JoinColumn(),
    __metadata("design:type", country_entity_1.Country)
], Contact.prototype, "country", void 0);
__decorate([
    typeorm_1.ManyToMany(type => education_entity_1.Education, education => education.contacts),
    typeorm_1.JoinTable({ name: 'contacts_educations' }),
    __metadata("design:type", Array)
], Contact.prototype, "educations", void 0);
__decorate([
    typeorm_1.ManyToMany(type => job_entity_1.Job, job => job.contacts),
    typeorm_1.JoinTable({ name: 'contacts_jobs' }),
    __metadata("design:type", Array)
], Contact.prototype, "jobs", void 0);
Contact = __decorate([
    typeorm_1.Entity("contacts")
], Contact);
exports.Contact = Contact;
//# sourceMappingURL=contact.entity.js.map