import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
   const app = await NestFactory.create(AppModule, { logger: console });
   app.useGlobalPipes(new ValidationPipe());
   console.log(`server running: ${process.env.PORT}`);
   await app.listen(process.env.PORT);
}
bootstrap();
