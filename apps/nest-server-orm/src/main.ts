import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app/app.module';

import { connect } from './db';
import { connectOrm } from './orm';




console.log("==============", process.env['JWT_SECRET'])

async function bootstrap() {
  await connect()

  await connectOrm()

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  await app.listen(3007);
  console.log("Nest Server listening at http://localhost:3007/")

  app.useStaticAssets('../../_swagger', { prefix: 'api'});
}
bootstrap();
