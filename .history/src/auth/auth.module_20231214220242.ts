import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from 'models/user';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [User],
})
export class AuthModule {}
