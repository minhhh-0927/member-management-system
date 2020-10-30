import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { SkillDto } from './dto/skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';

export interface ISkillRepository {
    create(skill: CreateSkillDto): Promise<SkillDto>;
    getSkills(): Promise<Array<SkillDto>>;
    update(skill: UpdateSkillDto): Promise<SkillDto>;
    delete(id: number): Promise<SkillDto>;
}

@Injectable()
export class SkillRepository implements ISkillRepository {
    constructor(
        @InjectRepository(Skill)
        private skillRepository: Repository<Skill>
    ) {}

    public async create(skill: CreateSkillDto): Promise<SkillDto> {
        const entity = this.skillRepository.create(skill);
        return await this.skillRepository.save(entity);
    }

    public async getSkills(): Promise<Array<SkillDto>> {
        return await this.skillRepository.find();
    }

    public async update(skill: UpdateSkillDto): Promise<SkillDto> {
        const entity = await this.skillRepository.findOne({ id: skill.id });

        if (!entity) {
            throw new NotFoundException();
        }

        entity.name = skill.name;
        entity.level = skill.level;
        entity.experienceYear = skill.experienceYear;

        return await this.skillRepository.save(entity);
    }

    public async delete(id: number): Promise<SkillDto> {
        const entity = await this.skillRepository.findOne({ id: id });

        if (!entity) {
            throw new NotFoundException();
        }

        return await this.skillRepository.remove(entity);
    }
}
