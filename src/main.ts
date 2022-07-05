import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //#region Configuração Swagger
  const config = new DocumentBuilder()
    .setTitle('Todo Docs')
    .setDescription('Todos API description')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  //#endregion

  // Adicionando o validador
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
