import { Transform } from "class-transformer";
import { IsEmail } from "class-validator";

export class SignInDto { 
  @IsEmail()
  @IsString()
  @Transform()
  readonly email: string;

}