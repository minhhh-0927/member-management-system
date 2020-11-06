import { Inject, Injectable } from '@nestjs/common';
import { PROJECT_REPOSITORY, PROJECT_TEAM_REPOSITORY } from './contants';
import { CreateProjectTeamDto } from './dto/create-project-team.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectTeamDto } from './dto/project-team.dto';
import { ProjectDto } from './dto/project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { IProjectTeamRepository } from './project-team.repository';
import { IProjectRepository } from './project.repository';

export interface IProjectService {
    create(project: CreateProjectDto): Promise<ProjectDto>;
    getProject(): Promise<Array<ProjectDto>>;
    update(project: UpdateProjectDto): Promise<ProjectDto>;
    delete(id: number): Promise<ProjectDto>;
    addTeam(projectTeam: CreateProjectTeamDto): Promise<ProjectTeamDto>;
    deleteTeam(teamId: number): Promise<void>;
}

@Injectable()
export class ProjectService implements IProjectService {
    constructor(
        @Inject(PROJECT_REPOSITORY)
        private projectRepository: IProjectRepository,
        @Inject(PROJECT_TEAM_REPOSITORY)
        private projectTeamRepository: IProjectTeamRepository
    ) {}

    public async create(project: CreateProjectDto): Promise<ProjectDto> {
        return this.projectRepository.create(project);
    }

    public async getProject(): Promise<Array<ProjectDto>> {
        return this.projectRepository.getProject();
    }

    public async update(project: UpdateProjectDto): Promise<ProjectDto> {
        return this.projectRepository.update(project);
    }

    public async delete(id: number): Promise<ProjectDto> {
        return this.projectRepository.delete(id);
    }

    public async addTeam(projectTeam: CreateProjectTeamDto): Promise<ProjectTeamDto> {
        return this.projectTeamRepository.create(projectTeam);
    }

    public async deleteTeam(teamId: number): Promise<void> {
        return this.projectTeamRepository.delete(teamId);
    }
}
