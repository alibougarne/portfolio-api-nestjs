"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var job_entity_1 = require("../../admin-features/jobs/job.entity");
var company_entity_1 = require("../../admin-features/companies/company.entity");
var createJobs1574798221901 = /** @class */ (function () {
    function createJobs1574798221901() {
        this.jobRepository = typeorm_1.getRepository(job_entity_1.Job);
        this.countryRepository = typeorm_1.getRepository(country_entity_1.Country);
        this.companyRepository = typeorm_1.getRepository(company_entity_1.Company);
    }
    createJobs1574798221901.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var jobs, _i, jobs_1, job, _a, _b, _c, _d, error_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        jobs = [{
                                jobTitle: "Web developer",
                                mission: "create and maintain web sites",
                                company: "Dypix",
                                country: "Algeria",
                                beginDate: new Date(2014, 12, 1),
                                endDate: new Date(2016, 12, 1)
                            },
                            {
                                jobTitle: "Software Enginner",
                                mission: "create and maintain applications for employees of Algeria airways",
                                company: "Air Algérie",
                                country: "Algeria",
                                beginDate: new Date(2016, 12, 13),
                                endDate: new Date(2018, 1, 14)
                            }];
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 8, , 9]);
                        _i = 0, jobs_1 = jobs;
                        _e.label = 2;
                    case 2:
                        if (!(_i < jobs_1.length)) return [3 /*break*/, 7];
                        job = jobs_1[_i];
                        _b = (_a = this.jobRepository).save;
                        _c = [__assign({}, job)];
                        _d = {};
                        return [4 /*yield*/, this.countryRepository.findOne({
                                name: job.country
                            })];
                    case 3:
                        _d.country = _e.sent();
                        return [4 /*yield*/, this.companyRepository.findOne({
                                name: job.company
                            })];
                    case 4: return [4 /*yield*/, _b.apply(_a, [__assign.apply(void 0, _c.concat([(_d.company = _e.sent(), _d)]))])];
                    case 5:
                        _e.sent();
                        _e.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_1 = _e.sent();
                        throw error_1;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    createJobs1574798221901.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return createJobs1574798221901;
}());
exports.createJobs1574798221901 = createJobs1574798221901;
