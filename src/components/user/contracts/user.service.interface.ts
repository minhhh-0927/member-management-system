import {RegisterUserDto, RetrieveUserDto, UserDto} from '../dto';

export interface IUserService {
  signUp(user: RegisterUserDto): Promise<UserDto>;
  getUsers(): Promise<Array<RetrieveUserDto>>;
}
