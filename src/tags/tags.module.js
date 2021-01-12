"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var tags_controller_1 = require("./tags.controller");
var tags_service_1 = require("./tags.service");
var typeorm_1 = require("@nestjs/typeorm");
var tag_entity_1 = require("./tag.entity");
var platform_express_1 = require("@nestjs/platform-express");
var TagsModule = /** @class */ (function () {
    function TagsModule() {
    }
    TagsModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([tag_entity_1.Tag]), platform_express_1.MulterModule.register({
                    dest: './client/resources/tags'
                })],
            controllers: [tags_controller_1.TagsController],
            providers: [tags_service_1.TagsService]
        })
    ], TagsModule);
    return TagsModule;
}());
exports.TagsModule = TagsModule;
