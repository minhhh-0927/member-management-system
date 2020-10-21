import { Get, Injectable, InternalServerErrorException, NotFoundException, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePositionDto } from './dto/create-position.dto';
import { PositionDto } from './dto/position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { Position } from './entities/position.entity';

export interface IPositionRepository {
    create(position: CreatePositionDto): Promise<PositionDto>;
    getPositions(): Promise<Array<PositionDto>>;
    update(position: UpdatePositionDto): Promise<PositionDto>;
    delete(id: number): Promise<PositionDto>;
}

@Injectable()
export class PositionRepository implements IPositionRepository {
    constructor(
        @InjectRepository(Position)
        private positionRepository: Repository<Position>,
    ) { }

    public async create(position: CreatePositionDto): Promise<PositionDto> {
        const entity = this.positionRepository.create(position);
        return await this.positionRepository.save(entity);
    }

    public async getPositions(): Promise<Array<PositionDto>> {
        return await this.positionRepository.find();
    }

    public async update(position: UpdatePositionDto): Promise<PositionDto> {
        const entity = await this.positionRepository.findOne({ id: position.id });

        if (!entity) {
            throw new NotFoundException();
        }

        entity.name = position.name;
        return await this.positionRepository.save(entity);
    }

    public async delete(id: number): Promise<PositionDto> {
        const entity = await this.positionRepository.findOne({ id: id });

        if (!entity) {
            throw new NotFoundException();
        }

        return await this.positionRepository.remove(entity);
    }
}
