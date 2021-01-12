"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var auth_service_1 = require("./auth.service");
var local_strategy_1 = require("./local.strategy");
var users_module_1 = require("../users/users.module");
var passport_1 = require("@nestjs/passport");
var jwt_1 = require("@nestjs/jwt");
var constants_1 = require("./constants");
var jwt_strategy_1 = require("./jwt.strategy");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        common_1.Module({
            imports: [
                passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
                jwt_1.JwtModule.register({
                    secret: constants_1.jwtConstants.secret,
                    signOptions: { expiresIn: '48h' }
                }),
                users_module_1.UsersModule
            ],
            providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
            exports: [auth_service_1.AuthService]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
