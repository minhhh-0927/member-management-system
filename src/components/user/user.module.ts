import { Module } from '@nestjs/common';
import { ClassProvider } from '@nestjs/common/interfaces';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth';
import { USER_REPOSITORY, USER_SERVICE } from './constants';
import { Users } from './entities';
import { UserRepository } from './repositories';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from './jwt.strategy';

const userRepositoryProvider: ClassProvider = {
    provide: USER_REPOSITORY,
    useClass: UserRepository,
};

const userServiceProvider: ClassProvider = {
    provide: USER_SERVICE,
    useClass: UserService,
};

@Module({
    imports: [
        TypeOrmModule.forFeature([Users]),
        AuthModule,
        JwtModule.register({
            secret: '8b1fc1da-e063-5596-b282-8205012a6a81',
            signOptions: {
                expiresIn: 3600,
            },
        }),
        PassportModule.register({ defaultStrategy: 'jwt' }),
    ],
    controllers: [UserController],
    providers: [
        userRepositoryProvider,
        userServiceProvider,
        JwtStrategy,
    ],
    exports: [
        userServiceProvider,
        JwtStrategy,
        PassportModule,
    ],
})
export class UserModule { }
