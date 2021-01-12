"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var class_validator_1 = require("class-validator");
var uniqueEmail_1 = require("../validators/uniqueEmail");
var swagger_1 = require("@nestjs/swagger");
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto() {
    }
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsEmail(),
        class_validator_1.IsNotEmpty(),
        class_validator_1.Validate(uniqueEmail_1.IsUserEmailAlreadyExist)
    ], CreateUserDto.prototype, "email");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty(),
        swagger_1.ApiProperty()
    ], CreateUserDto.prototype, "first_name");
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateUserDto.prototype, "last_name");
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsEmpty()
    ], CreateUserDto.prototype, "password");
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsDateString()
    ], CreateUserDto.prototype, "birth_date");
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
