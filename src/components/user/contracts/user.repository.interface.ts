import { RegisterUserDto, RetrieveUserDto, UserDto } from '../dto';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';

export interface IUserRepository {
  findUserByUsername(username: string): Promise<UserDto | undefined>;
  findUserByEmail(email: string): Promise<UserDto | undefined>;
  createUser(user: RegisterUserDto): Promise<UserDto>;
  getUsers(): Promise<Array<RetrieveUserDto> | []>;
  validateUserPassword(credentials: AuthCredentialsDto): Promise<UserDto | undefined>
}
