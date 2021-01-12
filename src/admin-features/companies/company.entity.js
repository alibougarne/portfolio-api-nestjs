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
var project_entity_1 = require("../../projects/project.entity");
var common_1 = require("../../shared/entities/common");
var business_line_entity_1 = require("../../admin-features/business-lines/business-line.entity");
var country_entity_1 = require("../../admin-features/countries/country.entity");
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column()
    ], Company.prototype, "name");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.IsUrl()
    ], Company.prototype, "link");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(2, 50)
    ], Company.prototype, "type");
    __decorate([
        typeorm_1.Column()
    ], Company.prototype, "description");
    __decorate([
        typeorm_1.Column({
            type: "date",
            name: 'begin-date'
        })
    ], Company.prototype, "beginDate");
    __decorate([
        typeorm_1.Column({
            type: "date",
            name: 'end-date',
            "default": null
        })
    ], Company.prototype, "endDate");
    __decorate([
        typeorm_1.Column({
            name: 'logo-path'
        })
    ], Company.prototype, "logoPath");
    __decorate([
        typeorm_1.ManyToOne(function (type) { return country_entity_1.Country; }, function (country) { return country.companies; })
    ], Company.prototype, "country");
    __decorate([
        typeorm_1.OneToMany(function () { return project_entity_1.Project; }, function (project) { return project.company; })
    ], Company.prototype, "projects");
    __decorate([
        typeorm_1.ManyToMany(function (type) { return business_line_entity_1.Businessline; }, function (businessline) { return businessline.companies; }),
        typeorm_1.JoinTable({ name: 'companies_businesslines' })
    ], Company.prototype, "businesslines");
    Company = __decorate([
        typeorm_1.Entity("companies")
    ], Company);
    return Company;
}(common_1.Common));
exports.Company = Company;
