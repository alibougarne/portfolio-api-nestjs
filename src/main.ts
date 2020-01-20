import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as rateLimit from 'express-rate-limit';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Portfolio API')
    .setDescription('My portfolio API description')
    .setVersion('1.0')
    .addTag('portfolio')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.use(helmet());
  app.use(compression());
  app.enableCors();
  // app.use(csurf());
  // app.use(
  //   rateLimit({
  //     windowMs: 15 * 60 * 1000, // 15 minutes
  //     max: 100, // limit each IP to 100 requests per windowMs
  //   }),
  // );
  await app.listen(3001);
}
bootstrap();
