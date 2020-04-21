"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const helmet = require("helmet");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: console,
    });
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Portfolio API')
        .setDescription('My portfolio API description')
        .setVersion('1.0')
        .addTag('portfolio')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use(helmet());
    app.enableCors();
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map