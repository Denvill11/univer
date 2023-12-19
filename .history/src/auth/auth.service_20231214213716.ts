import { Injectable } from '@nestjs/common';

import { RegistrationDto } from './authDTO/registrationDto';
import { User } from 'models/user';

@Injectable()
export class AuthService {
  constructor() {}
  registration(data: RegistrationDto) {
  }
}
