import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { AUTH_SERVICE, IAuthService } from '../auth';
import { USER_REPOSITORY } from './constants';
import { IUserRepository, IUserService } from './contracts';
import { RegisterUserDto, RetrieveUserDto, UserDto } from './dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService implements IUserService {

    private userRepository: IUserRepository;
    private authService: IAuthService;
    private jwtService: JwtService;

    constructor(
        @Inject(USER_REPOSITORY) userRepository: IUserRepository,
        @Inject(AUTH_SERVICE) authService: IAuthService,
        jwtService: JwtService,
    ) {
        this.userRepository = userRepository;
        this.authService = authService;
        this.jwtService = jwtService;
    }

    public async signUp(user: RegisterUserDto): Promise<UserDto> {
        if (await this.usernameIsTaken(user.name)) {
            throw new ConflictException('Username is already taken.');
        }

        if (await this.emailIsTaken(user.email)) {
            throw new ConflictException('Email address is already taken.');
        }

        user.password = await this.authService.hashPassword(user.password);

        return await this.userRepository.createUser(user);
    }

    private async usernameIsTaken(name: string): Promise<boolean> {
        const user = await this.userRepository.findUserByUsername(name);

        return user !== undefined;
    }

    private async emailIsTaken(email: string): Promise<boolean> {
        const user = await this.userRepository.findUserByEmail(email);

        return user !== undefined;
    }

    public async getUsers(): Promise<Array<RetrieveUserDto>> {
        return await this.userRepository.getUsers();
    }

    public async signIn(credentials: AuthCredentialsDto): Promise<{ user: UserDto, accessToken: string }> {
        const { email, password }: { email: string, password: string } = credentials;
        const user = await this.userRepository.validateUserPassword(credentials);

        if (!user) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const payload = { email };
        const accessToken = this.jwtService.sign(payload);

        return { user, accessToken };
    }

}
