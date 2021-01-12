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
var project_entity_1 = require("../../projects/project.entity");
var category_entity_1 = require("../../categories/category.entity");
var tag_entity_1 = require("../../tags/tag.entity");
var company_entity_1 = require("../../admin-features/companies/company.entity");
var core_1 = require("@nestjs/core");
var createProjects1574798221692 = /** @class */ (function () {
    function createProjects1574798221692() {
        this.categoryRepository = typeorm_1.getRepository(category_entity_1.Category);
        this.companyRepository = typeorm_1.getRepository(company_entity_1.Company);
        this.projectRepository = typeorm_1.getRepository(project_entity_1.Project);
        this.tagRepository = typeorm_1.getRepository(tag_entity_1.Tag);
    }
    createProjects1574798221692.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var webProjects, projects, _i, projects_1, project, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        webProjects = '';
                        projects = [
                            {
                                categoryName: 'web site',
                                nameList: [
                                    {
                                        name: 'Ngaous',
                                        description: {
                                            ar: '<p><span dir="RTL">مصبرات <strong>نقاوس</strong> - رائد المنتوج الطبيعي، ويتكون من وحدتين الإنتاج؛ <strong>وحدة نقاوس <strong>و</strong>&nbsp;وحدة مينا</strong>، هي من أقدم الشركات الجزائرية السباقة في ميدانها، متخصصة في تحويل</span></p><p><span dir="RTL">&nbsp;الفواكه إنتاج وتسويق المياه الثمرية والعصائر والمصبرات</span>&nbsp;&nbsp;</p><p><span dir="RTL">تقع الشركة بمنطقة نقاوس بولاية باتنة شرق الجزائر وهي منطقة فلاحية معروفة بغزارة إنتاجها لفاكهة المشمش</span></p><p><span dir="RTL">فتحت الشركة أبوابها سنة <strong>1979</strong> على إثر عقد مع شركة <strong>سيفال</strong>&nbsp;</span><span dir="RTL">ال</span><span dir="RTL">فرنسية &nbsp;&nbsp;</span></p><p>&nbsp; <strong>ENAJUC</strong>&nbsp;<span dir="RTL">كانت بداية الإنتاج سنة <strong>1989</strong> تحت إشراف الشركة الوطنية للعصائر والمصبرات&nbsp;</span>&nbsp;</p><p><span dir="RTL">&nbsp;في إطار إعادة هيكلة لها فأصبحت كيانا قائما بذاتها في <strong>01/01/ 1998</strong></span><strong>ENAJUC</strong>&nbsp;<span dir="RTL">استقلت المؤسسة عن مجمع</span></p><p>&nbsp;<span dir="RTL">تستقى منتجات نقاوس من فاكهة المشمش الطبيعية العطرة والغنية بحلاوتها فهي تنتقى من أجود ما في بساتين نقاوس ومينة مما يعطي لرحيقها ذلك الذوق المميز في جودته</span>&nbsp;</p>',
                                            en: 'N’gaous - Conserves, the leader in natural products, Composed of two production units; the N’gaous unit and the Menaa unit, it is among the former Algerian companies, specialized in fruit processing, manufacturing and marketing of fruit waters, juices and drinks; preserves, located in N’gaous, in the Wilaya of Batna in the east of Algeria, an agricultural region, rich in apricot production, its creation was in 1979 by a contract signed with the French company CIFAL, 1981 was the first year of production, under the supervision of the ENAJUC group. (Entreprise Nationale des Jus et Conserves). On 01/01/1998, the company was restructured as part of the spin-off of the parent company ENAJUC to become N’gaous - Conserves. It was privatized on 17/02/2007, and is currently 100% owned by the MAAZOUZ Group. The N’GAOUS range of products is made from the fragrant and naturally sugar-rich apricots carefully selected from the N’GAOUS and MENAA orchards, which makes the N’GAOUS apricot nectar so particularly good and unique.',
                                            fr: 'N’gaous – Conserves, le leader du naturel, Composée de deux unités de production ; unité de N’gaous et l’unité de Menaa, elle est parmi les anciennes entreprises algériennes, spécialisées dans la transformation des fruits, fabrication et commercialisation des eaux fruitées, jus &amp; conserves, située à N’gaous, à la Wilaya de Batna à l’est de l’Algérie, une région agricole, riche de sa production d’abricot, sa création était en 1979 par un contrat signé avec la société française CIFAL, 1981 était la première année de production, sous la tutelle du groupe ENAJUC. (Entreprise Nationale des Jus et Conserves). Le 01/01/1998, l’entreprise a été restructurée dans le cadre de la filialisation de la société mère ENAJUC pour devenir N’gaous – Conserves. Privatisée le 17/02/2007, et actuellement elle est détenue à 100% par le Groupe MAAZOUZ. La gamme de produits N’GAOUS est issue des abricot parfumé et naturellement riche en sucre soigneusement sélectionner dans les vergers de N’GAOUS et MENAA ce qui rend le nectar d’abricot N’GAOUS si particulièrement bon et unique.'
                                        },
                                        tags: [
                                            'joomla',
                                            'bootstrap',
                                            'greensock',
                                            'k2',
                                            'fontawesome',
                                            'parallax',
                                            'jquery',
                                            'responsive',
                                        ],
                                        company: 'Dypix',
                                        link: 'https://ngaous.com'
                                    },
                                    {
                                        name: 'Ramy Food',
                                        description: {
                                            ar: 'TAIBA FOOD COMANY (TFC) هي شركة جزائرية خاصة ولدت في عام 2007 من شركة DELICE FOOD COMPANY (DFC) التي بدأت نشاطها في عام 2005. تعمل TFC في مجال المنتجات الغذائية بشكل أكثر تحديداً في مجال إنتاج المشروبات غير الكحولية. تتخصص TFC في إنتاج وتوزيع المشروبات غير الكحولية ، أي عصائر الفاكهة والمشروبات الغازية ومشروبات الطاقة تحت علامة RAMY التجارية. يقع موقع الإنتاج في منطقة الرويبة الصناعية بالجزائر العاصمة ، والتي تبين أنها منطقة استراتيجية لتوريد المواد الخام وكذلك لتوزيع المنتج النهائي على الأراضي الوطنية.',
                                            en: 'N’gaous - Conserves, the leader in natural products, Composed of two production units; the N’gaous unit and the Menaa unit, it is among the former Algerian companies, specialized in fruit processing, manufacturing and marketing of fruit waters, juices and drinks; preserves, located in N’gaous, in the Wilaya of Batna in the east of Algeria, an agricultural region, rich in apricot production, its creation was in 1979 by a contract signed with the French company CIFAL, 1981 was the first year of production, under the supervision of the ENAJUC group. (Entreprise Nationale des Jus et Conserves). On 01/01/1998, the company was restructured as part of the spin-off of the parent company ENAJUC to become N’gaous - Conserves. It was privatized on 17/02/2007, and is currently 100% owned by the MAAZOUZ Group. The N’GAOUS range of products is made from the fragrant and naturally sugar-rich apricots carefully selected from the N’GAOUS and MENAA orchards, which makes the N’GAOUS apricot nectar so particularly good and unique.',
                                            fr: 'TAIBA FOOD COMANY (TFC) est une entreprise algérienne privée issue en 2007 de l’entreprise DELICE FOOD COMPANY (DFC) laquelle a débuté son activité en 2005. TFC opère dans le domaine des produits agroalimentaires plus exactement dans le domaine de la production des boissons non alcoolisées. TFC est spécialisée dans la production et la distribution des boissons non alcoolisées à savoir les jus de fruit, boissons gazeuses et boissons énergétiques sous la marque RAMY. Le site de production est implanté au niveau de la zone industrielle de Rouïba à Alger qui s’avère être une zone stratégique pour l’approvisionnement en matière première ainsi que pour la distribution du produit fini sur le territoire national'
                                        },
                                        tags: [
                                            'joomla',
                                            'bootstrap',
                                            'k2',
                                            'fontawesome',
                                            'jquery',
                                            'responsive',
                                            'caroufredsel',
                                            'animatecss',
                                        ],
                                        company: 'Dypix',
                                        link: 'https://ramyfood.com'
                                    },
                                    {
                                        name: 'Bridgestone Algérie',
                                        description: {
                                            ar: 'تأسست في عام 1931 على يد Shōjirō Ishibashi في Kurume باليابان ، أخذت الشركة المصنعة للإطارات ذات المستوى العالمي اسمها من مؤسسها. Ishibashi يعني جسر الحجر باللغة اليابانية.',
                                            en: 'Founded in 1931 by Shōjirō Ishibashi in Kurume, Japan, this world-class tire manufacturer originally took its name from its founder. Ishibashi means stone bridge in Japanese.',
                                            fr: 'Fondé en 1931 par Shōjirō Ishibashi à Kurume au Japon, ce manufacturier de pneumatiques d’envergure mondiale a emprunté, à l’origine, son nom de son fondateur. Ishibashi signifie pont de pierre en japonais.'
                                        },
                                        tags: [
                                            'joomla',
                                            'bootstrap',
                                            'greensock',
                                            'k2',
                                            'fontawesome',
                                            'parallax',
                                            'jquery',
                                            'responsive',
                                        ],
                                        company: 'Dypix',
                                        link: 'https://globalaxis.com'
                                    },
                                ]
                            },
                            {
                                categoryName: 'Web Application',
                                nameList: [
                                    {
                                        name: 'B2B Brandt france',
                                        description: {
                                            ar: 'تطبيق الأعمال التجارية لكبار تجار التجزئة في مجموعة brandt الفرنسية',
                                            en: 'The business-to-business application for the major retailers of the French Brandt Group France',
                                            fr: 'L‘application business to business pour les grands distributeur du groupe français Brandt France'
                                        },
                                        tags: [
                                            'springboot',
                                            'java',
                                            'Restfull',
                                            'sqlserver',
                                            'redis',
                                            'flyway',
                                            'jpa',
                                            'gitlab',
                                            'vuejs',
                                            'vuetify',
                                            'parallax',
                                            'nodejs',
                                        ],
                                        company: 'Brandt france',
                                        link: null
                                    },
                                ]
                            },
                            {
                                categoryName: 'Web Application',
                                nameList: [
                                    {
                                        name: 'Import/Export management',
                                        description: {
                                            ar: 'تطبيق إدارة الاستيراد / التصدير لإدارة الشؤون المالية في قطب صناعة Cevital Group',
                                            en: 'The import/export file management application for the finance department of the Cevital Group‘s industry division.',
                                            fr: 'L‘application de gestion des dossiers import/export pour la direction des finances du pole industrie de Ceviatl Group'
                                        },
                                        tags: [
                                            '.net',
                                            'c#',
                                            'sqlserver',
                                            'git',
                                            'entityframework',
                                            'javascript',
                                            'jquery',
                                            'animatecss',
                                        ],
                                        company: 'Cevital Group',
                                        link: null
                                    },
                                ]
                            },
                            {
                                categoryName: 'Web Application',
                                nameList: [
                                    {
                                        name: 'Appliance purchasing management',
                                        description: {
                                            ar: 'تطبيق إدارة شراء الأجهزة المنزلية لجميع موظفي الخطوط الجوية الجزائرية',
                                            en: 'The application of household appliances purchase management for all employees of Algeria airlines',
                                            fr: 'L‘application de gestion des gestion d‘achat électroménagers pour lensemble des employé d‘Air Algérie'
                                        },
                                        tags: [
                                            'jsf',
                                            'java',
                                            'sqlserver',
                                            'svn',
                                            'eclipselink',
                                            'jpa',
                                            'jquery',
                                            'animatecss',
                                        ],
                                        company: 'Air Algérie',
                                        link: null
                                    },
                                ]
                            },
                        ];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        _i = 0, projects_1 = projects;
                        _a.label = 2;
                    case 2:
                        if (!(_i < projects_1.length)) return [3 /*break*/, 5];
                        project = projects_1[_i];
                        return [4 /*yield*/, this.createProject(project)];
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
    createProjects1574798221692.prototype.createProject = function (project) {
        return __awaiter(this, void 0, void 0, function () {
            var category, categories, _i, _a, prj, company, companies, project_1, tags, _b, _c, tagName, tag, findedTags;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log('%c⧭', 'color: #0088cc', "======= createProject begin ===== ");
                        category = new category_entity_1.Category();
                        return [4 /*yield*/, this.categoryRepository.find({
                                where: { name: project.categoryName }
                            })];
                    case 1:
                        // let categoryNameObj = { name: project.categoryName };
                        // category = await this.categoryRepository.findOneOrFail({ where: { categoryNameObj } });
                        categories = _d.sent();
                        if (!categories[0]) return [3 /*break*/, 2];
                        category = categories[0];
                        return [3 /*break*/, 4];
                    case 2:
                        category.name = project.categoryName;
                        category.createdAt = category.updatedAt = new Date();
                        return [4 /*yield*/, this.categoryRepository.save(category)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _i = 0, _a = project.nameList;
                        _d.label = 5;
                    case 5:
                        if (!(_i < _a.length)) return [3 /*break*/, 13];
                        prj = _a[_i];
                        company = new company_entity_1.Company();
                        companies = void 0;
                        return [4 /*yield*/, this.companyRepository.find({
                                where: { name: prj.company }
                            })];
                    case 6:
                        companies = _d.sent();
                        if (companies[0]) {
                            company = companies[0];
                        }
                        else {
                            throw core_1.BaseExceptionFilter;
                        }
                        project_1 = new project_entity_1.Project();
                        tags = [];
                        project_1.category = category;
                        project_1.name = prj.name;
                        project_1.description = prj.description.en;
                        project_1.createdAt = project_1.updatedAt = new Date();
                        project_1.company = company;
                        project_1.beginDate = project_1.endDate = new Date();
                        _b = 0, _c = prj.tags;
                        _d.label = 7;
                    case 7:
                        if (!(_b < _c.length)) return [3 /*break*/, 10];
                        tagName = _c[_b];
                        tag = new tag_entity_1.Tag();
                        findedTags = [];
                        return [4 /*yield*/, this.tagRepository.find({
                                where: { hashtag: tagName }
                            })];
                    case 8:
                        // let tagNameObj = { name: tagName };
                        findedTags = _d.sent();
                        if (findedTags[0]) {
                            tag = findedTags[0];
                        }
                        else {
                            console.log('%c⧭ the tag  is 💩💩:', 'color: #00a3cc', tag);
                            tag.createdAt = tag.updatedAt = new Date();
                            tag.name = tagName;
                            // await this.tagRepository.save(tag);
                        }
                        console.log("%c\u29ED the tag  is \uD83E\uDD84 " + tagName + ": ", 'color: #00a3cc', tag);
                        tags.push(tag);
                        _d.label = 9;
                    case 9:
                        _b++;
                        return [3 /*break*/, 7];
                    case 10:
                        // await prj.tags.forEach(async (tagName: string) => {
                        // });
                        project_1.tags = tags;
                        return [4 /*yield*/, this.projectRepository.save(project_1)];
                    case 11:
                        _d.sent();
                        _d.label = 12;
                    case 12:
                        _i++;
                        return [3 /*break*/, 5];
                    case 13:
                        // await project.nameList.forEach(async (prj: any) => {
                        console.log('%c⧭', 'color: #0088cc', "======= createProject end ===== ");
                        return [2 /*return*/];
                }
            });
        });
    };
    createProjects1574798221692.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return createProjects1574798221692;
}());
exports.createProjects1574798221692 = createProjects1574798221692;
