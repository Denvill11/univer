import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from 'models/task';
import { User } from 'models/user';
import { UserTask } from 'models/usertask';
import { UserController } from './user.controller';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [SequelizeModule.forFeature([User, Task, UserTask])], 
})
export class UserModule {}
