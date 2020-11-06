import { Inject, Injectable } from '@nestjs/common';
import { TEAM_REPOSITORY } from './constants';
import { ITeamRepository, ITeamService } from './contracts';
import { RegisterTeamDto, RetrieveTeamDto, UpdateTeamDto } from './dto';

@Injectable()
export class TeamService implements ITeamService {
    protected teamRepository: ITeamRepository;

    constructor(@Inject(TEAM_REPOSITORY) teamRepository: ITeamRepository) {
        this.teamRepository = teamRepository;
    }

    public async getTeams(): Promise<Array<RetrieveTeamDto> | []> {
        return await this.teamRepository.getTeams();
    }

    public async create(team: RegisterTeamDto): Promise<RetrieveTeamDto | []> {
        return await this.teamRepository.create(team);
    }

    public async findOne(id: number): Promise<RetrieveTeamDto | []> {
        return await this.teamRepository.findOne(id);
    }

    public async update(team: UpdateTeamDto, id: number): Promise<RetrieveTeamDto | []> {
        return await this.teamRepository.update(team, id);
    }

    public async delete(id: number): Promise<boolean> {
        return await this.teamRepository.delete(id);
    }
}
