import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  SequelizeModule.forRoot({ 
    dialect: 'postgres',
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    models: process.env.
  }),
  AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
