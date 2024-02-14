import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import * as Joi from 'joi';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: config,
      isGlobal: true,
      envFilePath: ['.env', '.env.development', '.env.production', '.env.test'],
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .required(),
        APP_NAME: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
