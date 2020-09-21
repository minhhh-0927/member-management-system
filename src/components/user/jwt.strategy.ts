import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { USER_REPOSITORY } from './constants';
import { IUserRepository } from './contracts';
import { UserDto } from './dto';
import { JwtPayload } from './jwt-payload.interface';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    private userRepository: IUserRepository;

    constructor(
        @Inject(USER_REPOSITORY) userRepository: IUserRepository,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: '8b1fc1da-e063-5596-b282-8205012a6a81',
        });
        this.userRepository = userRepository;
    }

    public async validate(payload: JwtPayload): Promise<UserDto> {
        const { email }: { email: string } = payload;
        const user = await this.userRepository.findUserByEmail(email);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}
