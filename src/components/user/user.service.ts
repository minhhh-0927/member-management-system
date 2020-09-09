import {ConflictException, Inject, Injectable} from '@nestjs/common';

import {AUTH_SERVICE, IAuthService} from '../auth';
import {USER_REPOSITORY} from './constants';
import {IUserRepository, IUserService} from './contracts';
import {RegisterUserDto, RetrieveUserDto, UserDto} from './dto';

@Injectable()
export class UserService implements IUserService {

    private userRepository: IUserRepository;
    private authService: IAuthService;

    constructor(@Inject(USER_REPOSITORY) userRepository: IUserRepository,
                @Inject(AUTH_SERVICE) authService: IAuthService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }

    public async signUp(user: RegisterUserDto): Promise<UserDto> {
        if (await this.usernameIsTaken(user.username)) {
            throw new ConflictException('Username is already taken.');
        }

        if (await this.emailIsTaken(user.email)) {
            throw new ConflictException('Email address is already taken.');
        }

        user.password = await this.authService.hashPassword(user.password);

        return await this.userRepository.createUser(user);
    }

    private async usernameIsTaken(username: string): Promise<boolean> {
        const user = await this.userRepository.findUserByUsername(username);

        return user !== undefined;
    }

    private async emailIsTaken(email: string): Promise<boolean> {
        const user = await this.userRepository.findUserByEmail(email);

        return user !== undefined;
    }

    public async getUsers(): Promise<Array<RetrieveUserDto>> {
        return await this.userRepository.getUsers();
    }

}
