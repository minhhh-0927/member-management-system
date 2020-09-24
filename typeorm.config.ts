import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Position } from 'src/components/position/entities/position.entity';
import { Project } from './src/components/project/entities/project.entity';
import { Skill } from './src/components/skill/entities/skill.entity';
import { Team } from './src/components/team/entities/team.entity';
import { Users } from './src/components/user/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'tuan',
    password: '12345678',
    database: 'mms',
    entities: [Users, Position, Team, Project, Skill],
    synchronize: true,
};
