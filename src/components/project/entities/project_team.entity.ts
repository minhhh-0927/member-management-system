import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'project_teams' })
export class ProjectTeam {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'int',
        name: 'team_id',
    })
    public teamId: number;

    @Column({
        type: 'int',
        name: 'project_id',
    })
    public projectId: number;

    @CreateDateColumn({
        type: 'datetime',
        name: 'created_at',
    })
    public createdAt: Date;

    @UpdateDateColumn({
        type: 'datetime',
        name: 'updated_at',
    })
    public updatedAt: Date;
}
