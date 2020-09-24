import { IsEmail, IsOptional, IsString, Matches, MaxLength } from 'class-validator';

export class RegisterUserDto {

  @IsString()
  @MaxLength(255)
  public name: string;

  @IsEmail()
  @MaxLength(255)
  public email: string;

  @IsString()
  @MaxLength(255)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password too weak' })
  public password: string;
}
