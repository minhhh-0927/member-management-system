import { Module } from '@nestjs/common';
import { TeamController } from './team.controller'
import { TeamService } from './team.service'
import { ClassProvider } from '@nestjs/common/interfaces';
import { TEAM_REPOSITORY, TEAM_SERVICE } from './constants';
import { TeamRepository } from './repositories';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entities';

const teamRepositoryProvider: ClassProvider = {
    provide: TEAM_REPOSITORY,
    useClass: TeamRepository,
  };
  
const teamServiceProvider: ClassProvider = {
    provide: TEAM_SERVICE,
    useClass: TeamService,
  };

@Module({
    imports: [
        TypeOrmModule.forFeature([Team]),
    ],
    controllers: [ TeamController ],
    providers: [
        teamRepositoryProvider, 
        teamServiceProvider
    ],
    // exports: [
    //     teamServiceProvider
    // ],
})
export class TeamModule {}
