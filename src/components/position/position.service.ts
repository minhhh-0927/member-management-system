import { Inject, Injectable } from '@nestjs/common';
import { POSITION_REPOSITORY } from './constants';
import { CreatePositionDto } from './dto/create-position.dto';
import { PositionDto } from './dto/position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { IPositionRepository } from './position.repository';

export interface IPositionService {
    create(position: CreatePositionDto): Promise<PositionDto>;
    getPositions(): Promise<Array<PositionDto>>;
    update(position: UpdatePositionDto): Promise<PositionDto>;
    delete(id: number): Promise<PositionDto>;
}

@Injectable()
export class PositionService {
    constructor(
        @Inject(POSITION_REPOSITORY)
        private positionRepository: IPositionRepository,
    ) { }

    public async create(position: CreatePositionDto): Promise<PositionDto> {
        return this.positionRepository.create(position);
    }

    public async getPositions(): Promise<Array<PositionDto>> {
        return this.positionRepository.getPositions();
    }

    public async update(position: UpdatePositionDto): Promise<PositionDto> {
        return this.positionRepository.update(position);
    }

    public async delete(id: number): Promise<PositionDto> {
        return this.positionRepository.delete(id);
    }
}
