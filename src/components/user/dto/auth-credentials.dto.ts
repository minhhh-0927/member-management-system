import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthCredentialsDto {
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    public password: string;
}
