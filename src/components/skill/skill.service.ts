import { Inject, Injectable } from '@nestjs/common';
import { SKILL_REPOSITORY } from './constants';
import { CreateSkillDto } from './dto/create-skill.dto';
import { SkillDto } from './dto/skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { ISkillRepository } from './skill.repository';

export interface ISkillService {
    create(skill: CreateSkillDto): Promise<SkillDto>;
    getSkills(): Promise<Array<SkillDto>>;
    update(skill: UpdateSkillDto): Promise<SkillDto>;
    delete(id: number): Promise<SkillDto>;
}

@Injectable()
export class SkillService implements ISkillService {
    constructor(
        @Inject(SKILL_REPOSITORY)
        private skillRepository: ISkillRepository
    ) {}

    public async create(skill: CreateSkillDto): Promise<SkillDto> {
        return this.skillRepository.create(skill);
    }

    public async getSkills(): Promise<Array<SkillDto>> {
        return this.skillRepository.getSkills();
    }

    public async update(skill: UpdateSkillDto): Promise<SkillDto> {
        return this.skillRepository.update(skill);
    }

    public async delete(id: number): Promise<SkillDto> {
        return this.skillRepository.delete(id);
    }
}
