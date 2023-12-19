import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';

import { RegistrationDto } from './authDTO/registrationDto';
import { User } from 'models/user';
import { errorMessages } from 'src/errorMessages/errorMessages';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly userRepo: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  private generateToken(id: number) {
    return this.jwtService.signAsync({ id });
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

    const user = await this.userRepo.create(data);
    const token = await this.generateToken(user.id);
    delete user.password;
    
  }
}
