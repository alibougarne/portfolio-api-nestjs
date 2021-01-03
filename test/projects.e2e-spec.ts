import request from 'supertest';
import { Test } from '@nestjs/testing';
import { ProjectsModule } from '../src/projects/projects.module';
import { ProjectsService } from '../src/projects/projects.service';
import { INestApplication, HttpStatus } from '@nestjs/common';
import { Project } from '../src/projects/project.entity';
import { Repository } from 'typeorm';

describe('ProjectsController (e2e)', () => {
  let app: INestApplication;
  let projectRepository: Repository<Project>;
  let projectsService = new ProjectsService(projectRepository);

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ProjectsModule],
    })
      //   .overrideProvider(ProjectsService)
      //   .useValue(projectsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET projects`, () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(HttpStatus.OK)
      .expect({
        data: projectsService.getAllProjects(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
