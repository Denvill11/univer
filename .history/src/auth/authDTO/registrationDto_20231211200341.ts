import { IsEmail, IsString } from "class-validator";

export class RegistrationDto { 
  @IsEmail()
  @IsString()
  @Is
  readonly email: string;
}