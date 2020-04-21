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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const auth_service_1 = require("../auth/auth.service");
const login_user_dto_1 = require("../users/dto/login.user.dto");
let AppController = class AppController {
    constructor(appService, authService) {
        this.appService = appService;
        this.authService = authService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async login(loginUserDto) {
        let pass = await this.authService.validateUser(loginUserDto);
        if (pass) {
            return this.authService.login(pass);
        }
        return { message: "Wrong email or password" };
    }
    seeUploadedFile(image, res, req) {
        return res.sendFile(image, { root: `./client/resources/${req.query.target ? req.query.target : ""}` });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Post("login"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.loginUserDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    common_1.Get('images/:imgPath'),
    __param(0, common_1.Param('imgPath')), __param(1, common_1.Res()), __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "seeUploadedFile", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        auth_service_1.AuthService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map