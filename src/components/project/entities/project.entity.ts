import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { Team } from '../../team/entities/team.entity';

@Entity({ name: 'projects' })
export class Project {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: "varchar",
    length: 255
  })
  public name: string;

  @Column({
    type: "int",
    nullable: true
  })
  public status: number;

  @Column({
    type: "timestamp",
    nullable: true
  })
  public start_date: Date;

  @Column({
    type: "timestamp",
    nullable: true
  })
  public end_date: Date;

  @CreateDateColumn({
    type: 'timestamp'
  })
  public created_at: Date

  @UpdateDateColumn({
    type: 'timestamp'
  })
  public updated_at: Date

  @ManyToMany(type => Team)
  @JoinTable({
    name: "project_teams",
    joinColumn: {
      name: "project_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "team_id",
      referencedColumnName: "id"
    }
  })
  teams: Team[]
}
