import { Controller, Get, Inject, Post, Body, Res, Param } from '@nestjs/common';
import {TeamService} from './team.service'
import { RegisterTeamDto, UpdateTeamDto } from './dto'
import { TEAM_SERVICE } from './constants';
import { ITeamService } from './contracts';
import { Response } from 'express';

@Controller('teams')
export class TeamController {
    protected teamService :ITeamService;
    constructor (@Inject(TEAM_SERVICE) teamService: ITeamService) {
        this.teamService = teamService;
    }

    @Get('/')
    async findAll(@Res() res: Response): Promise<void> {
      let teams = await this.teamService.getTeams();

      return res.render('teams/index.njk', { teams: teams });
    }

    @Get('/create')
    async create(@Res() res: Response): Promise<void> {

      return res.render('teams/create.njk');
    }

    @Post('/create')
    async store(@Body() team: RegisterTeamDto, @Res() res: Response): Promise<void> {
      let result = await this.teamService.create(team);

      return res.redirect('/teams/');
    }

    @Get('/:id/edit')
    async findOne(@Param('id') id: number, @Res() res: Response): Promise<void> {
      let team = await this.teamService.findOne(id);

      return res.render('teams/edit.njk', { team: team });
    }

    @Post('/:id/update')
    async update(@Param('id') id: number, @Body() team: UpdateTeamDto, @Res() res: Response): Promise<void> {
      let result = await this.teamService.update(team, id);

      return res.redirect('/teams/');
    }

    @Get('/:id/delete')
    async delete(@Param('id') id: number, @Res() res: Response): Promise<void> {
      let team = await this.teamService.delete(id);

      return res.redirect('/teams/');
    }
}
