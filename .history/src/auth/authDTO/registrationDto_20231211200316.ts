import { IsEmail } from "class-validator";

export class RegistrationDto { 
  @IsEmail()
  readonly email: string;
}