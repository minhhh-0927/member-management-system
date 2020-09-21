import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IUserRepository } from '../contracts';
import { RegisterUserDto, RetrieveUserDto, UserDto } from '../dto';
import { Users } from '../entities';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class UserRepository implements IUserRepository {

    private userRepository: Repository<Users>;

    constructor(@InjectRepository(Users) userRepository: Repository<Users>) {
        this.userRepository = userRepository;
    }

    public async findUserByUsername(name: string): Promise<UserDto | undefined> {
        return await this.userRepository.findOne({ name: name });
    }

    public async findUserByEmail(email: string): Promise<UserDto | undefined> {
        return await this.userRepository.findOne({ email: email });
    }

    public async createUser(user: RegisterUserDto): Promise<UserDto> {
        const userEntity = this.userRepository.create(user);
        return await this.userRepository.save(userEntity);
    }

    public async getUsers(): Promise<Array<RetrieveUserDto>> {
        return await this.userRepository.find();
    }

    public async validateUserPassword(credentials: AuthCredentialsDto): Promise<UserDto | undefined> {
        const { email, password }: { email: string, password: string } = credentials;
        const user = await this.userRepository.findOne({ email });

        if (!user) {
            return undefined;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return undefined;
        }

        return user;
    }
}
