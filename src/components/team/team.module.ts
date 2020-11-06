import { Module } from '@nestjs/common';
import { ClassProvider } from '@nestjs/common/interfaces';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TEAM_REPOSITORY, TEAM_SERVICE } from './constants';
import { Team } from './entities';
import { TeamRepository } from './repositories';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

const teamRepositoryProvider: ClassProvider = {
    provide: TEAM_REPOSITORY,
    useClass: TeamRepository
};

const teamServiceProvider: ClassProvider = {
    provide: TEAM_SERVICE,
    useClass: TeamService
};

@Module({
    imports: [ 
        TypeOrmModule.forFeature([Team]),
        PassportModule.register({ defaultStrategy: 'jwt' })
    ],
    controllers: [TeamController],
    providers: [teamRepositoryProvider, teamServiceProvider]
    // exports: [
    //     teamServiceProvider
    // ],
})
export class TeamModule {}
