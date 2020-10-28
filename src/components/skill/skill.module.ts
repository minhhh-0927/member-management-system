import { ClassProvider, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SKILL_REPOSITORY, SKILL_SERVICE } from './constants';
import { Skill } from './entities/skill.entity';
import { SkillController } from './skill.controller';
import { SkillRepository } from './skill.repository';
import { SkillService } from './skill.service';

const skillRepositoryProvider: ClassProvider = {
    provide: SKILL_REPOSITORY,
    useClass: SkillRepository,
};

const skillServiceProvider: ClassProvider = {
    provide: SKILL_SERVICE,
    useClass: SkillService,
};

@Module({
    imports: [
        TypeOrmModule.forFeature([Skill]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
    ],
    controllers: [SkillController],
    providers: [skillRepositoryProvider, skillServiceProvider],
})
export class SkillModule {}
