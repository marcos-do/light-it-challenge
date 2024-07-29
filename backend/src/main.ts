import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Patients Registration')
    .setDescription('The patients registration API description')
    .setVersion('1.0')
    .addTag('p-regrist')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const configService = app.get(ConfigService);

  app.enableCors();

  await app.listen(configService.get("PORT") ?? 3001);
}
bootstrap();
