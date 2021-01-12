"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var business_line_entity_1 = require("../../admin-features/business-lines/business-line.entity");
var createBusinessLines1574798195375 = /** @class */ (function () {
    function createBusinessLines1574798195375() {
        this.businessLineRepository = typeorm_1.getRepository(business_line_entity_1.Businessline);
    }
    createBusinessLines1574798195375.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var countries;
            return __generator(this, function (_a) {
                countries = [
                    { name: 'food processing', icon: 'mdi-food' },
                    { name: 'household appliances', icon: 'mdi-monitor-speaker' },
                    { name: 'heavy industry', icon: 'mdi-robot-industrial' },
                    { name: 'freight transport', icon: 'mdi-train-car' },
                    { name: 'public services', icon: 'mdi-home-city' },
                    { name: 'air transport', icon: 'mdi-airplane' },
                    { name: 'insurance', icon: 'mdi-account-heart' },
                    { name: 'software engineering', icon: 'mdi-code-braces-box' },
                ];
                try {
                    this.createBusinessline(countries);
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    createBusinessLines1574798195375.prototype.createBusinessline = function (businessLines) {
        var _this = this;
        console.log('%c⧭', 'color: #0088cc', "======= createBusinessline begin ===== ");
        businessLines.forEach(function (businessLineName) { return __awaiter(_this, void 0, void 0, function () {
            var businessLine;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        businessLine = new business_line_entity_1.Businessline();
                        businessLine.name = businessLineName.name;
                        businessLine.mdiIcon = businessLineName.icon;
                        return [4 /*yield*/, this.businessLineRepository.save(businessLine)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        console.log('%c⧭', 'color: #0088cc', "======= createBusinessline end ===== ");
    };
    createBusinessLines1574798195375.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return createBusinessLines1574798195375;
}());
exports.createBusinessLines1574798195375 = createBusinessLines1574798195375;
