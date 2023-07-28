import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
