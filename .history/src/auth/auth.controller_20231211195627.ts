import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  construct
  @Post('/registration')
  register(@Body('email') email) {
    console.log(email);
  }
}
