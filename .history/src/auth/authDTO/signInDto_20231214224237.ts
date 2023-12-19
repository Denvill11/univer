import { IsEmail } from "class-validator";

export class SignInDto { 
  @IsEmail()
  @IsString()
  @Transfor
  readonly email: string;

}