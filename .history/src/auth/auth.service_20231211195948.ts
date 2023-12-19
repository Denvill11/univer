import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  registration(email: string) {
    console.log(email);
  }
}
