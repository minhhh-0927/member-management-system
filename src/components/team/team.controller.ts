import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { TEAM_SERVICE } from './constants';
import { ITeamService } from './contracts';
import { RegisterTeamDto, UpdateTeamDto } from './dto';
import { RetrieveTeamDto } from './dto/retrieve.dto';

@Controller('teams')
export class TeamController {
    constructor(
        @Inject(TEAM_SERVICE)
        private teamService: ITeamService
    ) { }

    @Get('/')
    @HttpCode(200)
    @UseGuards(AuthGuard())
    public async findAll(): Promise<Array<RetrieveTeamDto>> {
        return this.teamService.getTeams();
    }

    @Post('/')
    @HttpCode(201)
    @UseGuards(AuthGuard())
    public async create(@Body() team: RegisterTeamDto): Promise<RetrieveTeamDto | []> {
        return this.teamService.create(team);
    }

    @Get('/:id')
    @HttpCode(200)
    @UseGuards(AuthGuard())
    public async findOne(@Param('id') id: number, @Res() res: Response): Promise<RetrieveTeamDto | []> {
        return this.teamService.findOne(id);
    }

    @Patch('/:id')
    @HttpCode(200)
    @UseGuards(AuthGuard())
    public async update(@Param('id') id: number, @Body() team: UpdateTeamDto): Promise<RetrieveTeamDto | []> {
        return this.teamService.update(team, id);
    }

    @Delete('/:id')
    @HttpCode(200)
    @UseGuards(AuthGuard())
    public async delete(@Param('id') id: number): Promise<boolean> {
        return this.teamService.delete(id);
    }
}
