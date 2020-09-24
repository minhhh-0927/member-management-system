import { RegisterUserDto, RetrieveUserDto, UserDto } from '../dto';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';

export interface IUserService {
  signUp(user: RegisterUserDto): Promise<UserDto>;
  getUsers(): Promise<Array<RetrieveUserDto>>;
  signIn(credentials: AuthCredentialsDto): Promise<{ user: UserDto, accessToken: string }>;
}
