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
const bcrypt = require("bcryptjs");
const config_1 = require("../shared/config/config");
let User = class User extends common_1.Common {
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, config_1.keys.SALT);
    }
    checkIfUnencryptedPasswordIsValid(unencryptedPassword) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
};
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(4, 20),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(4, 100),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
User = __decorate([
    typeorm_1.Entity("users"),
    typeorm_1.Unique(["username"]),
    typeorm_1.Unique(["email"])
], User);
exports.User = User;
//# sourceMappingURL=users.entity.js.map