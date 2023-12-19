import { IsEmail } from "class-validator";

export class SignInDto { 
  @IsEmail()
  @IsString()
  @
  readonly email: string;

}