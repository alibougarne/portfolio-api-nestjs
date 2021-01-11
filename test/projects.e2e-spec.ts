import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsModule } from '../src/projects/projects.module';
import { ProjectsService } from '../src/projects/projects.service';
import { INestApplication, HttpStatus } from '@nestjs/common';
import { Project } from '../src/projects/project.entity';
import { Repository, Connection } from 'typeorm';
import { ProjectsController } from '../src/projects/projects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';

describe('ProjectsController (e2e)', () => {
  let app: INestApplication;
  // let projectRepository: Repository<Project>;
  // let projectsService = new ProjectsService(projectRepository);

  // beforeAll(async () => {
  //   const moduleFixture: TestingModule = await Test.createTestingModule({
  //     imports: [TypeOrmModule.forFeature([Project]), MulterModule.register({
  //       dest: './client/resources/projects',
  //     })],
  //     controllers: [ProjectsController],
  //     providers: [ProjectsService],
  //   }).compile();

  //   // const a = connection.manage
  //   app = moduleFixture.createNestApplication();
  //   await app.init();
  // });
  const connection = app.get(Connection);
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      // imports: [ProjectsModule],
      imports: [
        TypeOrmModule.forFeature([Project],connection),
        MulterModule.register({
          dest: './client/resources/projects',
        }),
      ],
      controllers: [ProjectsController],
      providers: [ProjectsService],
    })
      // .overrideProvider(ProjectsService)
      // .useValue(projectsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
    console.log('%c⧭', 'color: #cc0036', app);
  });

  it(`/GET projects`, async () => {
    return await request(app.getHttpServer())
      .get('/projects/')
      .expect(HttpStatus.OK)
      .expect({
        // data: ProjectsService.getAllProjects(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
