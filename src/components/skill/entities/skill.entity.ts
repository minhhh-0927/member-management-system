import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'skills' })
export class Skill {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'varchar',
        length: 255,
    })
    public name: string;

    @Column({
        type: 'varchar',
    })
    public level: string;

    @Column({
        type: 'int',
        name: 'experience_year',
    })
    public experienceYear: number;

    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
    })
    public createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
    })
    public updatedAt: Date;
}
