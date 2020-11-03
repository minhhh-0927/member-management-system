import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from '../position/entities/position.entity';
import { Project } from '../project/entities/project.entity';
import { ProjectTeam } from '../project/entities/project_team.entity';
import { Skill } from '../skill/entities/skill.entity';
import { Team } from '../team/entities';
import { Users } from '../user/entities';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get<string>('databaseHost'),
                port: configService.get<number>('databasePort'),
                username: configService.get<string>('databaseUsername'),
                password: configService.get<string>('databasePassword'),
                database: configService.get<string>('databaseName'),
                entities: [Users, Position, Team, Project, Skill, ProjectTeam]
            }),
            inject: [ConfigService]
        })
    ]
})
export class DatabaseModule {}
