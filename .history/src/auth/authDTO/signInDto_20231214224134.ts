import { IsEmail } from "sequelize-typescript";

export class SignInDto { 
  @IsEmail
}