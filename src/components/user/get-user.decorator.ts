import { createParamDecorator } from '@nestjs/common';
import { Request } from 'express';
import { UserDto } from './dto';

export const GetUser = createParamDecorator((data: unknown, req: Request) => {
    return req.user;
});
