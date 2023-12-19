import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { errorMessages } from '..//errorMessages/errorMessages';

export class RegistrationDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: errorMessages.smallPassword })
  @Transform(({ value }) => value.trim())
  readonly password: string;
}
