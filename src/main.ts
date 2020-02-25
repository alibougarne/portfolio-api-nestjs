import { NestFactory } from '@nestjs/core';
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