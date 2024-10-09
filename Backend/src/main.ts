import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

async function bootstrap() {
  // Load .env file
  config();

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 3000);

  console.log('Environment variables loaded:', {
    GOOGLE_CLIENT_ID: configService.get('GOOGLE_CLIENT_ID'),
    PORT: port,
  });

  app.enableCors({
    origin: configService.get('FRONTEND_URL'),
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  });

  await app.listen(port);
  console.log(`Application is running on: http://localhost:3000/`);
}
bootstrap();
