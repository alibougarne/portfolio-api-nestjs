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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var common_1 = require("@nestjs/common");
var tag_entity_1 = require("./tag.entity");
var typeorm_1 = require("@nestjs/typeorm");
var TagNotFoundException_exception_1 = require("./exceptions/TagNotFoundException.exception");
// import ClientFtp from '../config/ftp/ftp';
var axios_1 = require("axios");
var form_data_1 = require("form-data");
var cloudinary_1 = require("../tools/cloudinary");
var custom_exception_1 = require("../app/exception/custom.exception");
var env = require('dotenv');
env.config();
var TagsService = /** @class */ (function () {
    function TagsService(tagRepository) {
        var _this = this;
        this.tagRepository = tagRepository;
        // private readonly clientFtp: ClientFtp = new ClientFtp();
        this.path = require('path');
        this.fs = require('fs');
        this.saveToCloudinary = function (image) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this.saveToSirv = function (image) { return __awaiter(_this, void 0, void 0, function () {
            var fs, ba, token, form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('%c⧭', 'color: #d90000', image);
                        fs = require('fs');
                        return [4 /*yield*/, fs.readFileSync("./client/resources/tags/" + image.filename)];
                    case 1:
                        ba = _a.sent();
                        console.log('%c⧭ buffer ==> ', 'color: #807160', ba);
                        token = '';
                        return [4 /*yield*/, axios_1["default"].post('https://api.sirv.com/v2/token', {
                                clientId: process.env.CLIENT_ID,
                                clientSecret: process.env.CLIENT_SECRET
                            }, {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                                .then(function (response) {
                                console.log('%c⧭', 'color: #00b300', response.data.token);
                                if (response.data && response.data.token)
                                    token = response.data.token;
                            })["catch"](function (err) { return console.error(err); })];
                    case 2:
                        _a.sent();
                        if (!!!token) return [3 /*break*/, 4];
                        form = new form_data_1["default"]();
                        // form.append("images",  ba, { knownLength: fs.statSync(`./client/resources/tags/${image.filename}`).size });
                        form.append('images', ba, image.filename);
                        // form.append('images', image);
                        return [4 /*yield*/, axios_1["default"].post("https://api.sirv.com/v2/files/upload", form, {
                                params: {
                                    filename: 'merzaq'
                                },
                                headers: {
                                    accept: 'application/json',
                                    Authorization: "Bearer " + token,
                                    'Content-Type': "multipart/form-data; boundary=" + form._boundary
                                }
                            })
                                .then(function (response) {
                                console.log('%c⧭ response upload', 'color: #00b300', response);
                            })["catch"](function (err) { return console.error(err); })];
                    case 3:
                        // form.append('images', image);
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getCloudinaryUploadedFile = function (imageName, targetFolder) { return __awaiter(_this, void 0, void 0, function () {
            var url, cloudinary, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        url = '';
                        cloudinary = new cloudinary_1["default"]();
                        if (!(!!targetFolder && !!imageName)) return [3 /*break*/, 2];
                        return [4 /*yield*/, cloudinary.getImageUrl("portfolio/" + targetFolder + "/" + imageName)];
                    case 1:
                        url = _a.sent();
                        return [3 /*break*/, 3];
                    case 2: throw Error;
                    case 3: return [2 /*return*/, url];
                    case 4:
                        error_1 = _a.sent();
                        throw new custom_exception_1.CustomException('resource not found', 401);
                    case 5: return [2 /*return*/];
                }
            });
        }); };
    }
    TagsService.prototype.getAllTags = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tags, tagDtos, _i, tags_1, tag, _a, _b, _c, _d, error_2;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.tagRepository
                                .createQueryBuilder('tag')
                                .loadRelationCountAndMap('tag.projects', 'tag.projects')
                                .getMany()];
                    case 1:
                        tags = _e.sent();
                        tagDtos = [];
                        _i = 0, tags_1 = tags;
                        _e.label = 2;
                    case 2:
                        if (!(_i < tags_1.length)) return [3 /*break*/, 5];
                        tag = tags_1[_i];
                        _b = (_a = tagDtos).push;
                        _c = [__assign({}, tag)];
                        _d = {};
                        return [4 /*yield*/, this.getCloudinaryUploadedFile(tag.logoPath, 'tags')];
                    case 3:
                        _b.apply(_a, [__assign.apply(void 0, _c.concat([(_d.cloudImageUrl = _e.sent(), _d)]))]);
                        _e.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, tagDtos];
                    case 6:
                        error_2 = _e.sent();
                        throw new TagNotFoundException_exception_1.TagNotFoundException(error_2.toString(), 500);
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    TagsService.prototype.saveTag = function (tag, image) {
        return __awaiter(this, void 0, void 0, function () {
            var cloudinary, error_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (image) {
                            cloudinary = new cloudinary_1["default"]();
                            if (tag.id) {
                                cloudinary.deleteImage("portfolio/tags/" + tag.logoPath, function (error, result) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (error) {
                                            console.error('%c⧭', 'color: #731d6d', error);
                                            throw error;
                                        }
                                        return [2 /*return*/];
                                    });
                                }); });
                            }
                            cloudinary.save(image, 'portfolio/tags', function (error, result) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    if (error) {
                                        console.error('%c⧭', 'color: #731d6d', error);
                                        throw error;
                                    }
                                    return [2 /*return*/];
                                });
                            }); });
                            tag.logoPath = image.filename;
                        }
                        return [4 /*yield*/, this.tagRepository.save(tag)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        throw new TagNotFoundException_exception_1.TagNotFoundException('Tag not saved', 500);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TagsService.prototype.deleteTag = function (tagId) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.tagRepository["delete"](tagId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_4 = _a.sent();
                        throw new TagNotFoundException_exception_1.TagNotFoundException("Can't delete tag", 500);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TagsService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(tag_entity_1.Tag))
    ], TagsService);
    return TagsService;
}());
exports.TagsService = TagsService;
