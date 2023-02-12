import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true })); // 이 한줄만 넣어주면 :id를 string인걸 알아서 number로 변환
  await app.listen(3000);
}
bootstrap();
