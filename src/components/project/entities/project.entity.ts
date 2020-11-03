import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Team } from '../../team/entities/team.entity';

@Entity({ name: 'projects' })
export class Project {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'varchar',
        length: 255
    })
    public name: string;

    @Column({
        type: 'int',
        nullable: true
    })
    public status: number;

    @Column({
        type: 'timestamp',
        nullable: true,
        name: 'start_date'
    })
    public startDate: Date;

    @Column({
        type: 'timestamp',
        nullable: true,
        name: 'end_date'
    })
    public endDate: Date;

    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at'
    })
    public createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at'
    })
    public updatedAt: Date;

    @ManyToMany(() => Team)
    @JoinTable({
        name: 'project_teams',
        joinColumn: {
            name: 'project_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'team_id',
            referencedColumnName: 'id'
        }
    })
    public teams: Array<Team>;
}
