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
var country_entity_1 = require("../../admin-features/countries/country.entity");
var company_entity_1 = require("../../admin-features/companies/company.entity");
var business_line_entity_1 = require("../../admin-features/business-lines/business-line.entity");
var createCompanies1574798195376 = /** @class */ (function () {
    function createCompanies1574798195376() {
        this.countryRepository = typeorm_1.getRepository(country_entity_1.Country);
        this.companyRepository = typeorm_1.getRepository(company_entity_1.Company);
        this.businessLineRepository = typeorm_1.getRepository(business_line_entity_1.Businessline);
    }
    createCompanies1574798195376.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var companyList, _i, companyList_1, companyName, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        companyList = [
                            {
                                name: 'Dypix',
                                country: 'Algeria',
                                type: 'private',
                                link: 'https://dypix.com/',
                                description: 'Algerian Web Agency, specializing in new user experiences: Websites, e-commerce, e-marketing and mobile',
                                logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUP3T4ZAlG0AhyzILdZCZrE0ZX8seFVSRiTAwTWIo5VbvikIOmQ_jKD7yXsQ&s',
                                beginDate: '2014-12-01',
                                endDate: '2016-12-01',
                                businessLines: [
                                    { name: 'software engineering', icon: 'mdi-code-braces-box' },
                                ]
                            },
                            {
                                name: 'Brandt france',
                                country: 'France',
                                type: 'multinational',
                                link: 'https://airalgerie.dz/',
                                description: 'Brandt is the main brand of the Brandt Group. Brandt offers extensive product ranges in the fields of washing, cooking, cooling, small appliances, television and air conditioning.',
                                logoPath: 'http://www.brandt.com/sites/brandt_international/files/brandt_anglais.png',
                                beginDate: '2018-04-15',
                                endDate: '2019-05-25',
                                businessLines: [
                                    { name: 'household appliances', icon: 'mdi-monitor-speaker' },
                                ]
                            },
                            {
                                name: 'Cevital Group',
                                country: 'Algeria',
                                type: 'multinational',
                                link: 'https://www.cevital.com/',
                                description: 'Cevital is a family-run Group whose success and reputation are rooted in its history, its track record and its values. As the first private Algerian company to have invested in a wide variety of business sectors, it has passed significant historical milestones to achieve the size and recognition it enjoys today.',
                                logoPath: 'https://www.cevital.com/wp-content/themes/cevital/img/logo.svg',
                                beginDate: '2018-04-15',
                                endDate: '2019-05-25',
                                businessLines: [
                                    { name: 'food processing', icon: 'mdi-food' },
                                    // { name: 'household appliances', icon: 'mdi-monitor-speaker' },
                                    { name: 'heavy industry', icon: 'mdi-robot-industrial' },
                                    { name: 'freight transport', icon: 'mdi-train-car' },
                                ]
                            },
                            {
                                name: 'Air Algérie',
                                country: 'Algeria',
                                type: 'government-owned',
                                link: 'https://airalgerie.dz/',
                                description: 'Public economic joint stock company EPE/SPA with a share capital of 60.000.000.000, 00 DZD, created in 1962, Air Algérie is the national airline. Air Algerie has produced an excellent commercial performance, according to the Medium-Term plan, it carries more than 6.1 million passengers annually with a fleet of 59 aircrafts',
                                logoPath: 'https://airalgerie.dz/wp-content/uploads/2016/11/ah-logo.svg',
                                beginDate: '2016-12-13',
                                endDate: '2018-01-14',
                                businessLines: [{ name: 'air transport', icon: 'mdi-airplane' }]
                            },
                            {
                                name: 'Axa Algérie',
                                country: 'France',
                                type: 'multinational',
                                link: 'https://axa.com/',
                                description: 'AXA’s incredible adventure was born out of the dedication of a handful of men and women, led by Claude Bébéar, whose dream was to transform a small mutual insurer from Normandy into a world leader for insurance',
                                logoPath: 'https://www.axa.com/base/images/logo.svg',
                                beginDate: '2019-05-26',
                                endDate: '2019-11-12',
                                businessLines: [{ name: 'insurance', icon: 'mdi-account-heart' }]
                            },
                            {
                                name: 'Yassir',
                                country: 'Algeria',
                                type: 'multinational',
                                link: 'https://yassir.io/',
                                description: 'Nous avons créé YASSIR autour de la conviction que lorsque les gens sont bien traités, ils fournissent un meilleur service',
                                logoPath: 'https://yassir.io/wp-content/uploads/logo.svg',
                                beginDate: '2019-11-19',
                                endDate: '2019-11-19',
                                businessLines: [{ name: 'public services', icon: 'mdi-home-city' }]
                            },
                        ];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        _i = 0, companyList_1 = companyList;
                        _a.label = 2;
                    case 2:
                        if (!(_i < companyList_1.length)) return [3 /*break*/, 5];
                        companyName = companyList_1[_i];
                        return [4 /*yield*/, this.createCompany(companyName)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        throw error_1;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    createCompanies1574798195376.prototype.createCompany = function (companyName) {
        return __awaiter(this, void 0, void 0, function () {
            var company, countries, businesslines, country, _i, _a, businessLineObject, businessLinesFinded, createBusinessLine, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('%c⧭', 'color: #0088cc', '======= createCompany begin ===== ');
                        company = new company_entity_1.Company();
                        countries = [];
                        businesslines = [];
                        company.name = companyName.name;
                        company.type = companyName.type;
                        company.link = companyName.link;
                        company.description = companyName.description;
                        company.logoPath = companyName.logoPath;
                        company.beginDate = companyName.beginDate
                            ? new Date(Date.parse(companyName.beginDate))
                            : null;
                        company.endDate = companyName.endDate
                            ? new Date(Date.parse(companyName.endDate))
                            : null;
                        return [4 /*yield*/, this.countryRepository.find({
                                where: {
                                    name: companyName.country
                                }
                            })];
                    case 1:
                        countries = _b.sent();
                        if (!countries[0]) return [3 /*break*/, 2];
                        console.log('====== contry found', countries[0].code, company.name);
                        company.country = countries[0];
                        return [3 /*break*/, 4];
                    case 2:
                        country = new country_entity_1.Country;
                        country.name = companyName.country;
                        return [4 /*yield*/, this.countryRepository.save(country)];
                    case 3:
                        country = _b.sent();
                        company.country = country;
                        _b.label = 4;
                    case 4:
                        _i = 0, _a = companyName.businessLines;
                        _b.label = 5;
                    case 5:
                        if (!(_i < _a.length)) return [3 /*break*/, 8];
                        businessLineObject = _a[_i];
                        businessLinesFinded = [];
                        createBusinessLine = new business_line_entity_1.Businessline();
                        return [4 /*yield*/, this.businessLineRepository.find({
                                where: { name: businessLineObject.name }
                            })];
                    case 6:
                        businessLinesFinded = _b.sent();
                        if (businessLinesFinded[0]) {
                            createBusinessLine = businessLinesFinded[0];
                            console.log('%c⧭ businessLinesFinded ====> ', 'color: #d90000', businessLinesFinded[0]);
                        }
                        else {
                            createBusinessLine.createdAt = createBusinessLine.updatedAt = new Date();
                            createBusinessLine.name = businessLineObject.name;
                            createBusinessLine.mdiIcon = businessLineObject.icon;
                            console.log('%c⧭', 'color: #0088cc', '======= createBusinessLine $$$$$$$$ not found ===== ', createBusinessLine.name);
                            try {
                                // await this.businessLineRepository.save(createBusinessLine);
                            }
                            catch (e) {
                                // console.log('%c⧭ createBusinessLine ', 'color: #917399',createBusinessLine, e);
                            }
                        }
                        console.log("%c\u29ED the businessLineObject  is \uD83D\uDCA9 " + businessLineObject.name + ": ", 'color: #00a3cc', createBusinessLine);
                        businesslines.push(createBusinessLine);
                        _b.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 5];
                    case 8:
                        console.log('%c⧭', 'color: #0088cc', '======= company insertion ===== ', company.name);
                        company.businesslines = businesslines;
                        _b.label = 9;
                    case 9:
                        _b.trys.push([9, 11, , 12]);
                        return [4 /*yield*/, this.companyRepository.save(company)];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 12];
                    case 11:
                        e_1 = _b.sent();
                        console.log('%c⧭ company: ', 'color: #917399', e_1);
                        return [3 /*break*/, 12];
                    case 12:
                        console.log('%c⧭', 'color: #0088cc', '======= createCompany end ===== ');
                        return [2 /*return*/];
                }
            });
        });
    };
    createCompanies1574798195376.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return createCompanies1574798195376;
}());
exports.createCompanies1574798195376 = createCompanies1574798195376;
