import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { NotEmpty } from 'sequelize-typescript';

export class SignInDto {
  @IsEmail()
  @IsString()
  @IsNotEmptyNotEmpty()
  @Transform(({ value }) => value.trim())
  readonly email: string;

  @IsString()
  @NotEmpty()
}
