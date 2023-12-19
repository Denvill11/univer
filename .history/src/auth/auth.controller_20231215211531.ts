import { Body, Controller, Get, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { RegistrationDto } from './authDTO/registrationDto';
import { LoginDto } from './authDTO/loginDto';
import { whoAmIDto } from './authDTO/whoAmIDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/registration')
  register(@Body() registrationData: RegistrationDto) {
    return this.authService.registration(registrationData);
  }

  @Get('/login')
  login(@Body() loginData: LoginDto) {
    return this.authService.login(loginData);
  }

  @Get('/whoami')
  whoami(@Body() data: whoAmIDto) {
    return this.authService.getUserInfo(data);
  }
}
