import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ITeamRepository } from '../contracts';
import { RegisterTeamDto, RetrieveTeamDto, UpdateTeamDto } from '../dto';
import { Team } from '../entities';

@Injectable()
export class TeamRepository implements ITeamRepository {
    private teamRepository: Repository<Team>;

    constructor(@InjectRepository(Team) teamRepository: Repository<Team>) {
        this.teamRepository = teamRepository;
    }

    public async getTeams(): Promise<Array<RetrieveTeamDto>> {
        return await this.teamRepository.find();
    }

    public async create(team: RegisterTeamDto): Promise<RetrieveTeamDto> {
        const teamEntity = this.teamRepository.create(team);

        return await this.teamRepository.save(teamEntity);
    }

    public async findOne(id: number): Promise<RetrieveTeamDto> {
        return await this.teamRepository.findOneOrFail(id);
    }

    public async update(team: UpdateTeamDto, id: number): Promise<any> {
        return await this.teamRepository.update(id, team);
    }

    public async delete(id: number): Promise<boolean> {
        await this.teamRepository.delete(id);

        return true;
    }
}
