"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var Common = /** @class */ (function () {
    function Common() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid")
    ], Common.prototype, "id");
    __decorate([
        typeorm_1.Column({ name: 'created_at' }),
        typeorm_1.CreateDateColumn()
    ], Common.prototype, "createdAt");
    __decorate([
        typeorm_1.Column({ name: 'updated_at' }),
        typeorm_1.UpdateDateColumn()
    ], Common.prototype, "updatedAt");
    return Common;
}());
exports.Common = Common;
