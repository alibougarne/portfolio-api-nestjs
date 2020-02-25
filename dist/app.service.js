"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() {
        this.fruits = {
            peach: '🍑',
            strawberry: '🍓',
            banana: '🍌'
        };
        this.getMerzak = (name) => {
            return `i'm ${name} i like eating ! ${this.fruits['banana']}`;
        };
    }
    getHello() {
        return 'Hello World 💩💩!';
    }
    async getFruit(name) {
        console.log('%c⧭ 💩', 'color: #0088cc', name);
        console.log('%c⧭ name: ', 'color: #e50000', name);
        let a = "";
        this.fruits['merzak'] = '🥐';
        console.log('%c⧭ fruits: 🍎', 'color: #00bf00', this.fruits);
        await new Promise(resolve => {
            a = this.fruits[name];
            setTimeout(resolve, 2000);
        });
        return a;
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map