import { Injectable } from '@nestjs/common';

import { RegistrationDto } from './authDTO/registrationDto';
import { User } from 'models/user';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private readonly userRepo: typeof User) {}
  registration(data: RegistrationDto) {}
}
