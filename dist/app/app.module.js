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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const auth_module_1 = require("../auth/auth.module");
const users_module_1 = require("../users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tags_module_1 = require("../tags/tags.module");
const projects_module_1 = require("../projects/projects.module");
const companies_module_1 = require("../admin-features/companies/companies.module");
const business_lines_module_1 = require("../admin-features/business-lines/business-lines.module");
const countries_module_1 = require("../admin-features/countries/countries.module");
const contacts_module_1 = require("../contacts/contacts.module");
const educations_module_1 = require("../admin-features/educations/educations.module");
const jobs_module_1 = require("../admin-features/jobs/jobs.module");
const categories_module_1 = require("../categories/categories.module");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'client'),
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            tags_module_1.TagsModule,
            projects_module_1.ProjectsModule,
            companies_module_1.CompaniesModule,
            business_lines_module_1.BusinessLinesModule,
            countries_module_1.CountriesModule,
            contacts_module_1.ContactsModule,
            educations_module_1.EducationsModule,
            jobs_module_1.JobsModule,
            categories_module_1.CategoriesModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map