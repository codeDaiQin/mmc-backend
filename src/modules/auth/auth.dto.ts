import { IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString({ message: 'code' })
  @Length(6)
  code: string;
}
