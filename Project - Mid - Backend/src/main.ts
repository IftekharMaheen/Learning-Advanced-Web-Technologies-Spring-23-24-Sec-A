import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1800000
      }
    })
  );

  const config = new DocumentBuilder()
    .setTitle('Hospital Management System API')
    .setDescription('This is the API documentation for the Hospital Management System based on NestJS. This is based on SaaS based model.')
    .setVersion('1.0')
    .addTag('hms-api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
