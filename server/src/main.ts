import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.useGlobalPipes(new ValidationPipe());
   console.log(`server running: ${process.env.PORT}`);
   console.log(process.env.MOVIES_BASE_URL);
   await app.listen(process.env.PORT);
}
bootstrap();
