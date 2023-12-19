import { IsEmail } from "class-validator";

export class SignInDto { 
  @IsEmail()
  @IsString()
  @Tra
  readonly email: string;

}