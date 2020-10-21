import { AuthGuard } from '@nestjs/passport';
import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Patch, Post, Req, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import { POSITION_SERVICE } from './constants';
import { CreatePositionDto } from './dto/create-position.dto';
import { PositionDto } from './dto/position.dto';
import { IPositionService } from './position.service';
import { UpdatePositionDto } from './dto/update-position.dto';

@Controller('positions')
export class PositionController {
    constructor(
        @Inject(POSITION_SERVICE)
        private positionService: IPositionService,
    ) { }

    @Post('/')
    @UseGuards(AuthGuard())
    @UsePipes(ValidationPipe)
    public async create(@Body() position: CreatePositionDto): Promise<PositionDto> {
        return this.positionService.create(position);
    }

    @Get()
    @HttpCode(200)
    @UseGuards(AuthGuard())
    public async getPositions(): Promise<Array<PositionDto>> {
        return this.positionService.getPositions();
    }

    @Patch('/:id/update')
    @UsePipes(ValidationPipe)
    @HttpCode(200)
    @UseGuards(AuthGuard())
    public async update(@Param('id') id: number, @Body() position: UpdatePositionDto): Promise<PositionDto> {
        position.id = id;
        return this.positionService.update(position);
    }

    @Delete('/:id/delete')
    @HttpCode(200)
    @UseGuards(AuthGuard())
    public async delete(@Param('id') id: number): Promise<PositionDto> {
        return this.positionService.delete(id);
    }
}
