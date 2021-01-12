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
var tag_entity_1 = require("../../tags/tag.entity");
var createTags1574798195378 = /** @class */ (function () {
    function createTags1574798195378() {
        this.tagRepository = typeorm_1.getRepository(tag_entity_1.Tag);
    }
    createTags1574798195378.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var tags;
            return __generator(this, function (_a) {
                tags = [
                    {
                        name: 'Vue Js',
                        hashtag: 'vuejs',
                        link: 'https://vuejs.org',
                        description: 'Vue.js is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members coming from various companies such as Netlify and Netguru',
                        textColor: '#fff',
                        backgroundColor: '#4fc08d',
                        logoPath: 'ccbf58660c.png'
                    },
                    {
                        name: 'Spring Boot',
                        hashtag: 'springboot',
                        link: 'https://spring.io/projects/spring-boot',
                        description: 'Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run"',
                        textColor: '#fff',
                        backgroundColor: '#6db33f',
                        logoPath: '9359b826d5.png'
                    },
                    {
                        name: 'Node Js',
                        hashtag: 'nodejs',
                        link: 'https://nodejs.org',
                        description: 'Node.js® is a JavaScript runtime built on Chrome´s V8 JavaScript engine.',
                        textColor: '#fff',
                        backgroundColor: '#026e00',
                        logoPath: 'c8c5f9dd710.png'
                    },
                    {
                        name: 'Nest Js',
                        hashtag: 'nestjs',
                        link: 'https://nestjs.com',
                        description: 'A progressive Node.js framework for building efficient, reliable and scalable server-side applications',
                        textColor: '#fff',
                        backgroundColor: '#e0234e',
                        logoPath: 'df7aa6d5d7.png'
                    },
                    {
                        name: 'Joomla',
                        hashtag: 'joomla',
                        link: 'https://joomla.org',
                        description: 'Joomla is a free and open-source content management system for publishing web content, developed by Open Source Matters, Inc. It is built on a model–view–controller web application framework that can be used independently of the CMS',
                        textColor: '#fff',
                        backgroundColor: '#18487a',
                        logoPath: 'b5d9c9c1f5.png'
                    },
                    {
                        name: 'Photoshop',
                        hashtag: 'photoshop',
                        link: 'https://www.adobe.com/products/photoshop.html',
                        description: 'The world’s best imaging and graphic design software is at the core of just about every creative project, from photo editing and compositing to digital painting, animation, and graphic design. And now you can harness the power of Photoshop across desktop and iPad to create wherever inspiration strikes.',
                        textColor: '#fff',
                        backgroundColor: '#061d26',
                        logoPath: 'a61ccb586e.png'
                    }
                ];
                try {
                    this.createTag(tags);
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    createTags1574798195378.prototype.createTag = function (tags) {
        var _this = this;
        console.log('%c⧭', 'color: #0088cc', "======= createTag begin ===== ");
        tags.forEach(function (tagName) { return __awaiter(_this, void 0, void 0, function () {
            var tag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tag = new tag_entity_1.Tag();
                        tag.name = tagName.name;
                        tag.hashtag = tagName.hashtag;
                        tag.link = tagName.link;
                        tag.description = tagName.description;
                        tag.textColor = tagName.textColor;
                        tag.backgroundColor = tagName.backgroundColor;
                        tag.createdAt = tag.updatedAt = new Date();
                        tag.logoPath = tagName.logoPath;
                        return [4 /*yield*/, this.tagRepository.save(tag)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        console.log('%c⧭', 'color: #0088cc', "======= createTag end ===== ");
    };
    createTags1574798195378.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return createTags1574798195378;
}());
exports.createTags1574798195378 = createTags1574798195378;
