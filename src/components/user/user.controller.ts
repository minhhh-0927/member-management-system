import { Body, ClassSerializerInterceptor, Controller, Get, HttpCode, Inject, Post, Req, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Response } from 'express';
import { USER_SERVICE } from './constants';
import { IUserService } from './contracts';
import { RegisterUserDto, RetrieveUserDto, UserDto } from './dto';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { GetUser } from './get-user.decorator';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {

    private userService: IUserService;

    constructor(@Inject(USER_SERVICE) userService: IUserService) {
        this.userService = userService;
    }

    @Post('/signup')
    public async signUp(@Body() user: RegisterUserDto): Promise<UserDto> {
        return await this.userService.signUp(user);
    }

    @Post('/signin')
    @HttpCode(200)
    public async signIn(@Body() credentials: AuthCredentialsDto): Promise<{ user: UserDto, accessToken: string }> {
        return await this.userService.signIn(credentials);
    }

    @Get('/')
    @UseGuards(AuthGuard())
    public async getUsers(@GetUser() user: UserDto): Promise<Array<RetrieveUserDto>> {
        console.log(user);
        return await this.userService.getUsers();
    }

    @Get('/index')
    // tslint:disable-next-line:typedef no-any
    public async index(@Res() res: Response): Promise<any> {
        const data = await this.userService.getUsers();
        return res.render('index.njk', { username: data[0].name });
    }
}
