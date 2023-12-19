import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { RegistrationDto } from './authDTO/registrationDto';
import { User } from 'models/user';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private readonly userRepo: typeof User) {}
  registration(data: RegistrationDto) {

  }
}
