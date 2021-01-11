import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
<<<<<<< HEAD:test/app.e2e-spec.ts
import * as request from 'supertest';
<<<<<<< HEAD
import { AppModule } from './../src/app.module';
=======
=======
import request from 'supertest';
>>>>>>> develop:test/app.e2e-spec_.ts
import { AppModule } from '../src/app/app.module';
>>>>>>> 8841f6c2c2ed71c4845e08e6c79690292d33eb31

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

<<<<<<< HEAD
  it('/banana (GET)', () => {
    return request(app.getHttpServer())
      .get('/banana')
      .expect(205)
      .expect('🍌 and 🍓');
  });
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/banana')
      .expect(401)
=======
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
>>>>>>> 8841f6c2c2ed71c4845e08e6c79690292d33eb31
  });
});
