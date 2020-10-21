import { ClassProvider, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { POSITION_REPOSITORY, POSITION_SERVICE } from './constants';
import { Position } from './entities/position.entity';
import { PositionController } from './position.controller';
import { PositionRepository } from './position.repository';
import { PositionService } from './position.service';

const positionRepositoryProvider: ClassProvider = {
    provide: POSITION_REPOSITORY,
    useClass: PositionRepository,
};

const positionServiceProvider: ClassProvider = {
    provide: POSITION_SERVICE,
    useClass: PositionService,
};

@Module({
    imports: [
        TypeOrmModule.forFeature([Position]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
    ],
    providers: [
        positionRepositoryProvider,
        positionServiceProvider,
        PositionService,
    ],
    controllers: [PositionController],
})
export class PositionModule {}
