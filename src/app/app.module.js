"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var serve_static_1 = require("@nestjs/serve-static");
var path_1 = require("path");
var auth_module_1 = require("../auth/auth.module");
var users_module_1 = require("../users/users.module");
var typeorm_1 = require("@nestjs/typeorm");
var tags_module_1 = require("../tags/tags.module");
var projects_module_1 = require("../projects/projects.module");
var companies_module_1 = require("../admin-features/companies/companies.module");
var business_lines_module_1 = require("../admin-features/business-lines/business-lines.module");
var countries_module_1 = require("../admin-features/countries/countries.module");
var contacts_module_1 = require("../contacts/contacts.module");
var educations_module_1 = require("../admin-features/educations/educations.module");
var jobs_module_1 = require("../admin-features/jobs/jobs.module");
var categories_module_1 = require("../categories/categories.module");
var platform_express_1 = require("@nestjs/platform-express");
var AppModule = /** @class */ (function () {
    function AppModule(connection) {
        this.connection = connection;
        connection.runMigrations();
        // console.log(join(__dirname, '..', 'client'))
        // const fs = require('fs');
        // //joining path of directory 
        // const directoryPath = join(__dirname, '..', 'client/resources/tags');
        // //passsing directoryPath and callback function
        // fs.readdir(directoryPath, (err:string, files:File[]) => {
        //   //handling error
        //   if (err) {
        //     return console.log('Unable to scan directory: ' + err);
        //   }
        //   //listing all files using forEach
        //   files.forEach((file: File) => {
        //     // Do whatever you want to do with the file
        //     console.log("files are: ",file);
        //   });
        // });
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                typeorm_1.TypeOrmModule.forRoot(),
                platform_express_1.MulterModule.register({
                    dest: './client/resources'
                }),
                serve_static_1.ServeStaticModule.forRoot({
                    rootPath: path_1.join(__dirname, '..', 'client')
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
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
