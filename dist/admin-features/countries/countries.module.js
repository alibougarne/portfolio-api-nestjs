"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const countries_controller_1 = require("./countries.controller");
const countries_service_1 = require("./countries.service");
const country_entity_1 = require("./country.entity");
const typeorm_1 = require("@nestjs/typeorm");
const platform_express_1 = require("@nestjs/platform-express");
let CountriesModule = class CountriesModule {
};
CountriesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([country_entity_1.Country]), platform_express_1.MulterModule.register({
                dest: './client/resources/countries',
            })],
        controllers: [countries_controller_1.CountriesController],
        providers: [countries_service_1.CountriesService]
    })
], CountriesModule);
exports.CountriesModule = CountriesModule;
//# sourceMappingURL=countries.module.js.map