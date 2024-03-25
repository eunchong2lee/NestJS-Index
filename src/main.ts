import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ExceptionsFilter } from './common/exceptions/exception.filter';
import { setupSwagger } from './utils/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(new ExceptionsFilter());

  setupSwagger(app);

  await app.listen(process.env.MAIN_PORT);

  Logger.log(
    `Application runnin on port ${process.env.MAIN_PORT} ${process.env.DB_PASSWORD}`,
  );
}
bootstrap();
