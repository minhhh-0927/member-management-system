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
import { PROJECT_SERVICE } from './contants';
import { CreateProjectDto, CreateProjectTeamDto, ProjectDto, ProjectTeamDto, UpdateProjectDto } from './dto';
import { IProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
    constructor(
        @Inject(PROJECT_SERVICE)
        private projectService: IProjectService
    ) {}

    @Post('/')
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard())
    public async create(@Body() project: CreateProjectDto): Promise<ProjectDto> {
        return this.projectService.create(project);
    }

    @Get('/')
    @HttpCode(200)
    @UseGuards(AuthGuard())
    public async getProject(): Promise<Array<ProjectDto>> {
        return this.projectService.getProject();
    }

    @Patch('/:id')
    @HttpCode(200)
    @UseGuards(AuthGuard())
    public async update(@Param('id') id: number, @Body() project: UpdateProjectDto): Promise<ProjectDto> {
        project.id = id;
        return this.projectService.update(project);
    }

    @Delete('/:id')
    @HttpCode(200)
    @UseGuards(AuthGuard())
    public async delete(@Param('id') id: number): Promise<ProjectDto> {
        return this.projectService.delete(id);
    }

    @Post('/add-team')
    @HttpCode(201)
    @UseGuards(AuthGuard())
    public async addTeam(@Body() projectTeam: CreateProjectTeamDto): Promise<ProjectTeamDto> {
        return this.projectService.addTeam(projectTeam);
    }

    @Delete('/delete-team/:id')
    @HttpCode(200)
    @UseGuards(AuthGuard())
    public async deleteTeam(@Param('id') id: number): Promise<void> {
        return this.projectService.deleteTeam(id);
    }
}
