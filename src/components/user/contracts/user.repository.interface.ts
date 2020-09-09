import {RegisterUserDto, RetrieveUserDto, UserDto} from '../dto';

export interface IUserRepository {
  findUserByUsername(username: string): Promise<UserDto | undefined>;
  findUserByEmail(email: string): Promise<UserDto | undefined>;
  createUser(user: RegisterUserDto): Promise<UserDto>;
  getUsers(): Promise<Array<RetrieveUserDto> | []>;
}
