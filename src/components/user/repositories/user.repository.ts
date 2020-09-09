import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {IUserRepository} from '../contracts';
import {RegisterUserDto, RetrieveUserDto, UserDto} from '../dto';
import {User} from '../entities';

@Injectable()
export class UserRepository implements IUserRepository {

    private userRepository: Repository<User>;

    constructor(@InjectRepository(User) userRepository: Repository<User>) {
        this.userRepository = userRepository;
    }

    public async findUserByUsername(username: string): Promise<UserDto | undefined> {
        return await this.userRepository.findOne({username: username});
    }

    public async findUserByEmail(email: string): Promise<UserDto | undefined> {
        return await this.userRepository.findOne({email: email});
    }

    public async createUser(user: RegisterUserDto): Promise<UserDto> {
        const userEntity = this.userRepository.create(user);
        return await this.userRepository.save(userEntity);
    }

    public async getUsers(): Promise<Array<RetrieveUserDto>> {
        return await this.userRepository.find();
    }
}
