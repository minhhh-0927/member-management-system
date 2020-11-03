import { RegisterTeamDto, RetrieveTeamDto, UpdateTeamDto } from '../dto';

export interface ITeamRepository {
    getTeams(): Promise<Array<RetrieveTeamDto> | []>;
    create(team: RegisterTeamDto): Promise<RetrieveTeamDto | []>;
    findOne(id: number): Promise<RetrieveTeamDto | []>;
    update(team: UpdateTeamDto, id: number): Promise<RetrieveTeamDto | []>;
    delete(id: number): Promise<boolean>;
}
