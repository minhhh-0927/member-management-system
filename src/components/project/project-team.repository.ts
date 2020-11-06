import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectTeamDto } from './dto/create-project-team.dto';
import { ProjectTeamDto } from './dto/project-team.dto';
import { ProjectTeam } from './entities/project_team.entity';

export interface IProjectTeamRepository {
    create(projectTeam: CreateProjectTeamDto): Promise<ProjectTeamDto>;
    delete(teamId: number): Promise<void>;
}

export class ProjectTeamRepository {
    constructor(
        @InjectRepository(ProjectTeam)
        private repository: Repository<ProjectTeam>
    ) {}

    public async create(projectTeam: CreateProjectTeamDto): Promise<ProjectTeamDto> {
        const entity = await this.repository.create(projectTeam);
        return await this.repository.save(entity);
    }

    public async delete(teamId: number): Promise<void> {
        const entity = await this.repository.findOne({ teamId: teamId });

        if (!entity) {
            throw new NotFoundException();
        }

        await this.repository.remove(entity);
        return;
    }
}
