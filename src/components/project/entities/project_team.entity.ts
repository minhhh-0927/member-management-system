import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'project_teams' })
export class ProjectTeam {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: "int",
  })
  public team_id: number;

  @Column({
    type: "int",
  })
  public project_id: number;

  @CreateDateColumn({
    type: 'datetime'
  })
  public created_at: Date

  @UpdateDateColumn({
    type: 'datetime'
  })
  public updated_at: Date
}
