import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'models/user';
import { errorMessages } from 'src/errorMessages/errorMessages';

import { RegistrationDto } from './authDTO/registrationDto';
import { LoginDto } from './authDTO/loginDto';
import { whoAmIDto } from './authDTO/whoAmIDto';
import { UserTask } from 'models/usertask';
import { Task } from 'models/task';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly userRepo: typeof User,
    @InjectModel(UserTask) private readonly userTask: typeof UserTask,
    @InjectModel(Task) private readonly taskRepo: typeof Task,
    private readonly jwtService: JwtService,
  ) {}
  
  private generateToken(id: number) {
    return this.jwtService.signAsync({ id });
  }

  async getUserInfo(data: whoAmIDto) {
    const { id } = this.decodeToken(data.id);
    return await this.userRepo.findOne({
      where: { id },
      attributes: ['id', 'email', 'role'],
    });
  }

  decodeToken(token: string): any {
    try {
      const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
      return decoded;
    } catch (error) {
      console.error('Error decoding token:', error.message);
      throw new Error('Invalid token');
    }
  }

  async login(data: LoginDto) {
    const user = await this.validateUser(data);
    const role = user.role;
    delete user.password;
    const token = await this.generateToken(user.id);
    return { token, role };
  }

  private checkRole(pas: string) {
    switch (pas) {
      case String(process.env.ADMIN_PASSWORD):
        pas = 'admin';
        break;
      default:
        pas = 'user';
        break;
    }
    return pas;
  }

  async registration(data: RegistrationDto) {
    const candidateEmail = await this.userRepo.findOne({
      where: { email: data.email },
    });

    if (candidateEmail) {
      throw new HttpException(
        errorMessages.USER_EXIST_ERROR,
        HttpStatus.BAD_REQUEST,
      );
    }
    
    data.role = this.checkRole(data.role);
    const tasks = await this.taskRepo.findAll();
    const user = await this.userRepo.create(data);
    const role = user.role;
    const id = user.id;
    const promises = tasks.map(async task => {
      await this.userTask.create({
        taskId: task.id,
        userId: id,
      });
    });

    await Promise.all(promises);
    const token = await this.generateToken(user.id);
    return { token, role };
  }

  async validateUser(data: LoginDto) {
    const user = await this.userRepo.findOne({
      where: { email: data.email },
    });

    if (!user) {
      throw new UnauthorizedException({
        message: errorMessages.USER_NOT_FOUND,
      });
    }

    const isPasswordEquals = await bcrypt.compare(data.password, user.password);

    if (!isPasswordEquals) {
      throw new UnauthorizedException({
        message: errorMessages.USER_INCORRECT_PASSWORD,
      });
    }
    return user;
  }
}
