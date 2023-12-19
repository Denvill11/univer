import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegistrationDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  readonly email: string;
  
}
