import { ClassProvider, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PROJECT_REPOSITORY, PROJECT_SERVICE, PROJECT_TEAM_REPOSITORY } from './contants';
import { Project } from './entities/project.entity';
import { ProjectTeam } from './entities/project_team.entity';
import { ProjectTeamRepository } from './project-team.repository';
import { ProjectController } from './project.controller';
import { ProjectRepository } from './project.repository';
import { ProjectService } from './project.service';

const projectRepositoryProvider: ClassProvider = {
    provide: PROJECT_REPOSITORY,
    useClass: ProjectRepository,
};

const projectTeamRepositoryProvider: ClassProvider = {
    provide: PROJECT_TEAM_REPOSITORY,
    useClass: ProjectTeamRepository
};

const projectServiceProvider: ClassProvider = {
    provide: PROJECT_SERVICE,
    useClass: ProjectService,
};

@Module({
    imports: [TypeOrmModule.forFeature([Project, ProjectTeam]), PassportModule.register({ defaultStrategy: 'jwt' })],
    controllers: [ProjectController],
    providers: [projectRepositoryProvider, projectServiceProvider, projectTeamRepositoryProvider]
})
export class ProjectModule {}
