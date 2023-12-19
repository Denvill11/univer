import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { AuthModule } from './auth/auth.module';
import { User } from '../models/user';
import { CustomJwtModule } from './customJWT/customJwtModule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_DATABASE,
      database: process.env.DB_DATABASE,
      models: [User],
    }),
    AuthModule,
    CustomJwtModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
