import * as session from 'express-session';
import * as passport from 'passport';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      name: process.env.SESSION_ID_NAME,
      secret: process.env.SECRET_SESSION_KEY,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3001);
}
bootstrap();
