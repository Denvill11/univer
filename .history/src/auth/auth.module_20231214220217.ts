import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Sequelize } from 'sequelize';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [Sequelize],
})
export class AuthModule {}
