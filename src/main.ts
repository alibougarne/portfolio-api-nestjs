import { NestFactory } from '@nestjs/core';
<<<<<<< HEAD
import { AppModule } from './app.module';
import { resolve } from 'path';
import * as helmet from "helmet";
import * as cors from "cors";

async function bootstrap() {
  const APP_DIRECTORY = resolve(__dirname,'..');
  console.log('%c⧭', 'color: #f2ceb6', APP_DIRECTORY);
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(helmet());
  await app.listen(3002);
  console.log('%c⧭ 🐉 💩', 'color: #f2ceb6', 'server started! on :http://localhost:3002/');
}
bootstrap();
=======
import { AppModule } from './app/app.module';
// import * as compression from 'compression';
// import * as helmet from 'helmet';
// import * as csurf from 'csurf';
// import * as rateLimit from 'express-rate-limit';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true,
  // }));
  const options = new DocumentBuilder()
    .setTitle('Portfolio API')
    .setDescription('My portfolio API description')
    .setVersion('1.0')
    .addTag('portfolio')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  // app.use(helmet());
  // app.use(compression());
  app.enableCors();
  // app.use(csurf());
  // app.use(
  //   rateLimit({
  //     windowMs: 15 * 60 * 1000, // 15 minutes
  //     max: 100, // limit each IP to 100 requests per windowMs
  //   }),
  // );
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
>>>>>>> 8841f6c2c2ed71c4845e08e6c79690292d33eb31
