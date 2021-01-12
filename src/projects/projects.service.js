"use strict";
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
var typeorm_1 = require("@nestjs/typeorm");
var project_entity_1 = require("./project.entity");
var projectNotFoundException_exception_1 = require("./exception/projectNotFoundException.exception");
var cloudinary_1 = require("../tools/cloudinary");
var ProjectsService = /** @class */ (function () {
    function ProjectsService(projectRepository) {
        this.projectRepository = projectRepository;
    }
    ProjectsService.prototype.getAllProjects = function (take, skip) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.projectRepository
                                .createQueryBuilder('project')
                                .leftJoinAndSelect('project.category', 'category')
                                .leftJoinAndSelect('project.company', 'company')
                                .leftJoinAndSelect('project.tags', 'tag')
                                .take(take)
                                .skip(skip)
                                .getManyAndCount()];
                    case 1:
                        result = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        throw new projectNotFoundException_exception_1.ProjectNotFoundException(error_1.toString(), 500);
                    case 3: 
                    // console.log(projects);
                    return [2 /*return*/, result];
                }
            });
        });
    };
    ProjectsService.prototype.getProjectsByTag = function (tagId) {
        return __awaiter(this, void 0, void 0, function () {
            var projects, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        projects = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.projectRepository
                                .createQueryBuilder('project')
                                .innerJoinAndSelect('project.tags', 'tag')
                                .innerJoinAndSelect('project.tags', 'tag2')
                                .leftJoinAndSelect('project.category', 'category')
                                .where('tag.id = :id', { id: tagId })
                                .getMany()];
                    case 2:
                        projects = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        throw new projectNotFoundException_exception_1.ProjectNotFoundException(error_2.toString(), 500);
                    case 4: 
                    // console.log(projects);
                    return [2 /*return*/, projects];
                }
            });
        });
    };
    ProjectsService.prototype.getProjectsByCategory = function (catId) {
        return __awaiter(this, void 0, void 0, function () {
            var projects, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        projects = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.projectRepository
                                .createQueryBuilder('project')
                                .leftJoinAndSelect('project.category', 'category')
                                .where('category.id = :id', { id: catId })
                                .getMany()];
                    case 2:
                        projects = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        throw new projectNotFoundException_exception_1.ProjectNotFoundException(error_3.toString(), 500);
                    case 4: 
                    // console.log(projects);
                    return [2 /*return*/, projects];
                }
            });
        });
    };
    ProjectsService.prototype.saveProject = function (project, images) {
        return __awaiter(this, void 0, void 0, function () {
            var cloudinary, proj, _i, _a, image, _b, images_1, image, error_4;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log('%c⧭ images ===> ', 'color: #364cd9', images);
                        project.images = [];
                        images.forEach(function (file) {
                            if (project.mainImage === file.originalname) {
                                project.mainImage = file.filename;
                            }
                            project.images.push(file.filename);
                        });
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 12, , 13]);
                        cloudinary = new cloudinary_1["default"]();
                        if (!project.id) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.projectRepository.findOne(project.id)];
                    case 2:
                        proj = _c.sent();
                        if (!proj.images.length) return [3 /*break*/, 6];
                        _i = 0, _a = proj.images;
                        _c.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        image = _a[_i];
                        return [4 /*yield*/, cloudinary.deleteImage("portfolio/projects/" + image, function (error, result) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    if (error) {
                                        console.error('%c⧭', 'color: #731d6d', error);
                                        throw error;
                                    }
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        _b = 0, images_1 = images;
                        _c.label = 7;
                    case 7:
                        if (!(_b < images_1.length)) return [3 /*break*/, 10];
                        image = images_1[_b];
                        return [4 /*yield*/, cloudinary.save(image, 'portfolio/projects', function (error, result) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    console.log('%c⧭', 'color: #7f2200', result);
                                    if (error) {
                                        console.error('%c⧭', 'color: #731d6d', error);
                                        throw error;
                                    }
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 8:
                        _c.sent();
                        _c.label = 9;
                    case 9:
                        _b++;
                        return [3 /*break*/, 7];
                    case 10: return [4 /*yield*/, this.projectRepository.save(project)];
                    case 11: return [2 /*return*/, _c.sent()];
                    case 12:
                        error_4 = _c.sent();
                        throw new projectNotFoundException_exception_1.ProjectNotFoundException(error_4.toString(), 500);
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    ProjectsService.prototype.deleteProject = function (projectId) {
        return __awaiter(this, void 0, void 0, function () {
            var project, cloudinary, _a, _b, _i, image, fs_1, error_5;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.projectRepository.findOne(projectId)];
                    case 1:
                        project = _c.sent();
                        cloudinary = new cloudinary_1["default"]();
                        _a = [];
                        for (_b in project.images)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        image = _a[_i];
                        return [4 /*yield*/, cloudinary.deleteImage("portfolio/projects/" + image, function (error, result) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    if (error) {
                                        console.error('%c⧭', 'color: #731d6d', error);
                                        throw error;
                                    }
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        fs_1 = require('fs');
                        project.images.forEach(function (image) {
                            fs_1.unlinkSync("./client/resources/projects/" + image);
                        });
                        return [4 /*yield*/, this.projectRepository.remove(project)];
                    case 6: return [2 /*return*/, _c.sent()];
                    case 7:
                        error_5 = _c.sent();
                        throw new projectNotFoundException_exception_1.ProjectNotFoundException("Can't delete project", 500);
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ProjectsService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(project_entity_1.Project))
    ], ProjectsService);
    return ProjectsService;
}());
exports.ProjectsService = ProjectsService;
