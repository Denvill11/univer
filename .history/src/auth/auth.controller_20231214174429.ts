import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { RegistrationDto } from './authDTO/registrationDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/registration')
  register(@Body() registrationData: RegistrationDto) {
    return this.authService.registration(registrationData);
  }
}
x