import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'models/user';
import { UserTask } from 'models/usertask';
import * as jwt from 'jsonwebtoken';
import { Task } from 'models/task';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserTask) private readonly userTask: typeof UserTask,
    @InjectModel(Task) private readonly task: typeof Task,
  ) {}

  async getAll(token: any) {
    const { id } = this.decodeToken(token.id);
    const tasks = await this.userTask.findAll({
      where: {
        userId: id,
      },
      include: {
        model: this.task,
        attributes: ['name', 'content'],
      }
    });
    return tasks;
  }
  

  async changeStatus(token: any, data: any) {
      const { id } = this.decodeToken(token.id);
      console.log(data);
      await this.userTask.update(
        { status: data.status },
        {
          where: {
            taskId: data.task,
            userId: id,
          },
        }
      );
    }

  decodeToken(token: string): any {
    try {
      const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
      return decoded;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
