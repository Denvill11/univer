import { Injectable } from '@nestjs/common';

import { RegistrationDto } from './authDTO/registrationDto';
import { User } from 'models/user';

@Injectable()
export class AuthService {
  registration(data: RegistrationDto) {
    @InjectModel(User) private readonly userRepo: typeof: User
  }
}
