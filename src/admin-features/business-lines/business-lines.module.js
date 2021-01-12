"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var business_lines_controller_1 = require("./business-lines.controller");
var business_lines_service_1 = require("./business-lines.service");
var business_line_entity_1 = require("./business-line.entity");
var typeorm_1 = require("@nestjs/typeorm");
var platform_express_1 = require("@nestjs/platform-express");
var BusinessLinesModule = /** @class */ (function () {
    function BusinessLinesModule() {
    }
    BusinessLinesModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([business_line_entity_1.Businessline]), platform_express_1.MulterModule.register({
                    dest: './client/resources/businesses'
                })],
            controllers: [business_lines_controller_1.BusinessLinesController],
            providers: [business_lines_service_1.BusinessLinesService]
        })
    ], BusinessLinesModule);
    return BusinessLinesModule;
}());
exports.BusinessLinesModule = BusinessLinesModule;
