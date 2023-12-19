import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    private 
  ) {}
  @Post('/registration')
  register(@Body('email') email) {
    console.log(email);
  }
}
