import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('/registration')
  register(@Body('email') email, @Body('password') password,  {}
}
