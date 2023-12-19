import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { RegistrationDto } from './authDTO/registrationDto';
import { User } from 'models/user';
import { errorMessages } from 'src/errorMessages/errorMessages';
import { LoginDto } from './authDTO/loginDto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly userRepo: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  private generateToken(id: number) {
    return this.jwtService.signAsync({ id });
  }

  private login(data: LoginDto) { 
    const user = await this.validateUser(User)
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
    const user = await this.userRepo.create(data);
    const token = await this.generateToken(user.id);
    delete user.password;
    return { user, token };
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
  }
}
