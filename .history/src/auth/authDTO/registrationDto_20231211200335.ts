import { IsEmail, IsString } from "class-validator";

export class RegistrationDto { 
  @IsEmail()
  @IsString()
  
  readonly email: string;
}