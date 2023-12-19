import { Injectable } from '@nestjs/common';

import { RegistrationDto } from './authDTO/registrationDto';
import { User } from 'models/user';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private readonly userRepo: typeof User) {}
  registration(data: RegistrationDto) {}
}
function InjectModel(User: typeof User): (target: typeof AuthService, propertyKey: undefined, parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

