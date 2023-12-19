import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 
  const app = await NestFactory.create(AppModule);
  app.enableCors({});
  await app.listen(3000);
}
bootstrap();
