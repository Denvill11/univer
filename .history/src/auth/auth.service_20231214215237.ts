import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jw'

import { RegistrationDto } from './authDTO/registrationDto';
import { User } from 'models/user';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly userRepo: typeof User,
    private readonly jwtService: JwtService,
  ) {}
  registration(data: RegistrationDto) {

  }
}
