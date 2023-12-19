import { IsEmail } from "class-validator";

export class SignInDto { 
  @IsEmail()
  @I
  readonly email: string;

}