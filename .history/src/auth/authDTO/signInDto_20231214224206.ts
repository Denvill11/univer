import { IsEmail } from "class-validator";

export class SignInDto { 
  @IsEmail()
  readonly: email,
  
}