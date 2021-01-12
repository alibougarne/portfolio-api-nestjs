"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var common_1 = require("../../shared/entities/common");
var company_entity_1 = require("../../admin-features/companies/company.entity");
var job_entity_1 = require("../jobs/job.entity");
var education_entity_1 = require("../educations/education.entity");
var Country = /** @class */ (function (_super) {
    __extends(Country, _super);
    function Country() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(1, 50)
    ], Country.prototype, "name");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(1, 5)
    ], Country.prototype, "code");
    __decorate([
        typeorm_1.OneToMany(function () { return company_entity_1.Company; }, function (company) { return company.country; })
    ], Country.prototype, "companies");
    __decorate([
        typeorm_1.OneToMany(function () { return job_entity_1.Job; }, function (job) { return job.country; })
    ], Country.prototype, "jobs");
    __decorate([
        typeorm_1.OneToMany(function () { return education_entity_1.Education; }, function (education) { return education.country; })
    ], Country.prototype, "educations");
    Country = __decorate([
        typeorm_1.Entity("countries")
    ], Country);
    return Country;
}(common_1.Common));
exports.Country = Country;
