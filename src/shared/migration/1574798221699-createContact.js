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
var contact_entity_1 = require("../../contacts/contact.entity");
var country_entity_1 = require("../../admin-features/countries/country.entity");
var createContact1574798221699 = /** @class */ (function () {
    function createContact1574798221699() {
        this.contactRepository = typeorm_1.getRepository(contact_entity_1.Contact);
        this.countryRepository = typeorm_1.getRepository(country_entity_1.Country);
    }
    createContact1574798221699.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var contact, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        contact = new contact_entity_1.Contact();
                        contact.name = 'Ali';
                        contact.lastName = 'Bougarne';
                        contact.birthday = new Date(1989, 2, 17);
                        contact.phones = ['+213778245824'];
                        contact.slogan = '';
                        contact.status = 'Work at home';
                        contact.description =
                            'Hello and welcome to my profile! I am a Software engineer with more than 06 years of experience, I have worked for major companies in Algeria such as AXA, Cevital Group, Air Algérie and others, this vast experience with web development has allowed me to deliver good quality projects. In the last few years I have been focusing on new front end technologies such as Vue js, a modern js framework with great potential.';
                        contact.languages = ['Arabic', 'English', 'French'];
                        _a = contact;
                        return [4 /*yield*/, this.countryRepository.findOne({ name: "Algeria" })];
                    case 1:
                        _a.country = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.contactRepository.save(contact)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    createContact1574798221699.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return createContact1574798221699;
}());
exports.createContact1574798221699 = createContact1574798221699;
