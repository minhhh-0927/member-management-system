import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Inject,
    Param,
    Patch,
    Post,
    UseGuards,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SKILL_SERVICE } from './constants';
import { CreateSkillDto } from './dto/create-skill.dto';
import { SkillDto } from './dto/skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { ISkillService } from './skill.service';

@Controller('skills')
export class SkillController {
    constructor(
        @Inject(SKILL_SERVICE)
        private skillService: ISkillService
    ) {}

    @Post('/')
    @UseGuards(AuthGuard())
    @UsePipes(ValidationPipe)
    public async create(@Body() skill: CreateSkillDto): Promise<SkillDto> {
        return this.skillService.create(skill);
    }

    @Get()
    @HttpCode(200)
    @UseGuards(AuthGuard())
    public async getSkills(): Promise<Array<SkillDto>> {
        return this.skillService.getSkills();
    }

    @Patch('/:id/update')
    @UsePipes(ValidationPipe)
    @HttpCode(200)
    @UseGuards(AuthGuard())
    public async update(
        @Param('id') id: number,
        @Body() skill: UpdateSkillDto
    ): Promise<SkillDto> {
        skill.id = id;
        return this.skillService.update(skill);
    }

    @Delete('/:id/delete')
    @HttpCode(200)
    @UseGuards(AuthGuard())
    public async delete(@Param('id') id: number): Promise<SkillDto> {
        return this.skillService.delete(id);
    }
}
