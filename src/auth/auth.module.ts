import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from '../../models/user';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from 'models/task';
import { UserTask } from 'models/usertask';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [SequelizeModule.forFeature([User, Task, UserTask])],
})
export class AuthModule {}
