import { IsNotEmpty } from 'class-validator';

export class whoAmIDto {
  @IsNotEmpty()
  readonly id: number;
}
s