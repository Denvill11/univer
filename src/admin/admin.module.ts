import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from 'models/task';
import { UserTask } from 'models/usertask';
import { User } from 'models/user';

@Module({
    controllers: [AdminController],
    providers: [AdminService],
    imports: [SequelizeModule.forFeature([Task, UserTask, User])],
})
export class AdminModule {}
