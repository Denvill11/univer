import { Injectable } from '@nestjs/common';
import { RegistrationDto } from './authDTO/registrationDto';

@Injectable()
export class AuthService {
  registration(data: RegistrationDto) {
    console.log(data.email, data.password);
  }
}
