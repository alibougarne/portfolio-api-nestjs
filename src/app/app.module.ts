import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TagsModule } from '../tags/tags.module';
import { ProjectsModule } from '../projects/projects.module';
import { CompaniesModule } from '../admin-features/companies/companies.module';
import { BusinessLinesModule } from '../admin-features/business-lines/business-lines.module';
import { CountriesModule } from '../admin-features/countries/countries.module';
import { ContactsModule } from '../contacts/contacts.module';
import { EducationsModule } from '../admin-features/educations/educations.module';
import { JobsModule } from '../admin-features/jobs/jobs.module';
import { CategoriesModule } from '../categories/categories.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    MulterModule.register({
      dest: './client/resources',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    AuthModule,
    UsersModule,
    TagsModule,
    ProjectsModule,
    CompaniesModule,
    BusinessLinesModule,
    CountriesModule,
    ContactsModule,
    EducationsModule,
    JobsModule,
    CategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private readonly connection: Connection) {
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
}
