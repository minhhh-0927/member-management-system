import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectDto } from './dto/project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { NotFoundException } from '@nestjs/common';

export interface IProjectRepository {
    create(project: CreateProjectDto): Promise<ProjectDto>;
    getProject(): Promise<Array<ProjectDto>>;
    update(project: UpdateProjectDto): Promise<ProjectDto>;
    delete(id: number): Promise<ProjectDto>;
}

export class ProjectRepository implements IProjectRepository {
    constructor(
        @InjectRepository(Project)
        private projectRepository: Repository<Project>
    ) {}

    public async create(project: CreateProjectDto): Promise<ProjectDto> {
        const entity = this.projectRepository.create(project);
        return await this.projectRepository.save(entity);
    }

    public async getProject(): Promise<Array<ProjectDto>> {
        return await this.projectRepository.find();
    }

    public async update(project: UpdateProjectDto): Promise<ProjectDto> {
        const entity = await this.projectRepository.findOne({ id: project.id });

        if (!entity) {
            throw new NotFoundException();
        }

        entity.name = project.name;
        entity.status = project.status;
        entity.startDate = project.startDate;
        entity.endDate = project.endDate;

        return await this.projectRepository.save(entity);
    }

    public async delete(id: number): Promise<ProjectDto> {
        const entity = await this.projectRepository.findOne({ id });

        if (!entity) {
            throw new NotFoundException();
        }

        return await this.projectRepository.remove(entity);
    }
}
