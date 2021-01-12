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
var country_entity_1 = require("../../admin-features/countries/country.entity");
var Education = /** @class */ (function (_super) {
    __extends(Education, _super);
    function Education() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(1, 200)
    ], Education.prototype, "diplomeName");
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(1, 200)
    ], Education.prototype, "establishmentName");
    __decorate([
        typeorm_1.Column({
            nullable: true,
            "default": 'Lorum Ipsum sit amet Lorum Ipsum sit amet Lorum Ipsum sit amet'
        }),
        class_validator_1.IsEmpty(),
        class_validator_1.Length(0, 1000)
    ], Education.prototype, "description");
    __decorate([
        typeorm_1.Column()
    ], Education.prototype, "webSite");
    __decorate([
        typeorm_1.Column({
            type: 'date'
        })
    ], Education.prototype, "beginDate");
    __decorate([
        typeorm_1.Column({
            type: 'date',
            "default": null
        })
    ], Education.prototype, "endDate");
    __decorate([
        typeorm_1.ManyToOne(function (type) { return country_entity_1.Country; }, function (country) { return country.educations; })
    ], Education.prototype, "country");
    Education = __decorate([
        typeorm_1.Entity("educations")
    ], Education);
    return Education;
}(common_1.Common));
exports.Education = Education;
