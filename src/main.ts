import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  const swaggerConfig = new DocumentBuilder()
    .setTitle(config.get('app.name'))
    .setDescription(
      `
### Ecommerce API Documentation
This is a simple API documentation for an Ecommerce application.
It contains the following features:
- User Authentication
- Product Management
- Order Management
- Payment Gateway
- User Profile Management
    
    `,
    )
    .setVersion('1.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(config.get('app.doc'), app, document);

  await app.listen(config.get('app.port') || 3000);
}
bootstrap();
