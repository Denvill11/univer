import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class createNewTaskDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  readonly content: string;
}
