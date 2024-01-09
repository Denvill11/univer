import { Injectable } from '@nestjs/common';
import { createNewTaskDto } from './adminDTO/createNewTaskDto';
import { Task } from 'models/task';
import { InjectModel } from '@nestjs/sequelize';
import { UserTask } from 'models/usertask';
import { User } from 'models/user';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Task) private readonly taskRepo: typeof Task,
    @InjectModel(UserTask) private readonly userTask: typeof UserTask,
    @InjectModel(User) private readonly user: typeof User) {
  }

  async createTask(data: createNewTaskDto) { 
    const { id } = await this.taskRepo.create(data);
    const users = await this.user.findAll();

    const promises = users.map(async user => {
      await this.userTask.create({
        taskId: id,
        userId: user.id
      });
    });

    await Promise.all(promises);
  }

  async getAll() {
    return await this.taskRepo.findAll();
  }

  async deleteTask(id: number) {
    await this.userTask.destroy({
      where: {
        taskId: id,
      }
    });
    return await this.taskRepo.destroy({
      where: {
        id,
      }
    });
  }
}
