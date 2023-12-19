import { Transform } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';
import { NotEmpty } from 'sequelize-typescript';

export class SignInDto {
  @IsEmail()
  @IsString()
  @Transform(({ value }) => value.trim())
  readonly email: string;

  @IsString()
  @NotEmpty()
}
