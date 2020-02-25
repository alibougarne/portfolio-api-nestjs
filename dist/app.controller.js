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
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getHello(name) {
        console.log('%c⧭ getHello', 'color: #1589a7', name);
        let a;
        let b;
        let c = await Promise.all([this.appService.getFruit(name), this.appService.getFruit('strawberry')]).then(_ => {
            console.log('%c⧭ resolve all: ', 'color: #733d00', _);
            console.log('%c⧭ resolve all fruits: ', 'color: #733d00', this.appService.fruits);
            console.log('%c⧭ resolve all merzak fruits: ', 'color: #733d00', this.appService.getMerzak('merzak'));
            a = _[0];
            b = _[1];
        });
        return `${a} and ${b} with 🍔`;
    }
    getResponse(params) {
        console.log('%c⧭ getRespose', 'color: #d6064b', params);
        return JSON.stringify(params);
    }
    findAll(request) {
        return 'This action returns all cats';
    }
};
__decorate([
    common_1.Get(':name'),
    common_1.HttpCode(205),
    __param(0, common_1.Param('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "getResponse", null);
__decorate([
    common_1.Get('ca*ts'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "findAll", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map