import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(readonly private authService: AuthService, 
  ) {}
  @Post('/registration')
  register(@Body('email') email) {
    console.log(email);
  }
}
