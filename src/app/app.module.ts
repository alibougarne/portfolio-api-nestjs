import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TagsModule } from 'src/tags/tags.module';
import { ProjectsModule } from 'src/projects/projects.module';
import { CompaniesModule } from 'src/companies/companies.module';
import { BusinessLinesModule } from 'src/business-lines/business-lines.module';
import { CountriesModule } from 'src/countries/countries.module';
import { ContactsModule } from 'src/contacts/contacts.module';
import { EducationsModule } from 'src/secondary-features/educations/educations.module';
import { JobsModule } from 'src/secondary-features/jobs/jobs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
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
    JobsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {
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
