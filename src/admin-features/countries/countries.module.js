"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var countries_controller_1 = require("./countries.controller");
var countries_service_1 = require("./countries.service");
var country_entity_1 = require("./country.entity");
var typeorm_1 = require("@nestjs/typeorm");
var platform_express_1 = require("@nestjs/platform-express");
var CountriesModule = /** @class */ (function () {
    function CountriesModule() {
    }
    CountriesModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([country_entity_1.Country]), platform_express_1.MulterModule.register({
                    dest: './client/resources/countries'
                })],
            controllers: [countries_controller_1.CountriesController],
            providers: [countries_service_1.CountriesService]
        })
    ], CountriesModule);
    return CountriesModule;
}());
exports.CountriesModule = CountriesModule;
