import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable, JoinColumn } from 'typeorm';
import { Users } from '../../user/entities/user.entity';
import { Project } from '../../project/entities/project.entity';

@Entity({ name: 'teams' })
export class Team {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: "varchar",
    length: 255
  })
  public name: string;

  @Column({
    type: "text",
    nullable: true
  })
  public desciption: string;

  @CreateDateColumn({
    type: 'datetime'
  })
  public created_at: Date

  @UpdateDateColumn({
    type: 'datetime'
  })
  public updated_at: Date

  @OneToMany(type => Users, user => user.team_id)
  user: Users[]

  @ManyToMany(type => Project)
  @JoinTable({
    name: "project_teams",
    joinColumn: {
        name: "team_id",
        referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "project_id",
        referencedColumnName: "id"
    }
  })
  projects: Project[]
}
