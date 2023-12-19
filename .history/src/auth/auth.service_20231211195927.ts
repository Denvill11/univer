import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  registration(email: String) { 
    console.log(email)
  }
}
