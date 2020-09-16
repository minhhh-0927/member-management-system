import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Position } from '../../position/entities/position.entity'; 
import { Skill } from '../../skill/entities/skill.entity'; 
import { Team } from '../../team/entities/team.entity'; 

@Entity({ name: 'users' })
export class Users {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: "varchar",
    length: 255
  })
  public name: string;

  @Column({
    type: "varchar",
    length: 255,
    unique: true,
  })
  public email: string;

  @Column({
    type: "varchar",
    length: 255,
    select: false,
  })
  public password: string;

  @Column({
    type: "datetime",
    nullable: true
  })
  public birthday: Date;

  @CreateDateColumn({
    type: 'datetime'
  })
  public created_at: Date

  @UpdateDateColumn({
    type: 'datetime'
  })
  public updated_at: Date

  @OneToOne(type => Position)
  @JoinColumn({name: "position_id"})
  position_id: Position

  @ManyToOne(type => Team, team => team.user)
  @JoinColumn({name: "team_id"})
  team_id: Team

  @ManyToMany(type => Skill)
  @JoinTable({
    name: "user_skills",
    joinColumn: {
        name: "user_id",
        referencedColumnName: "id"
    },
    inverseJoinColumn: {
        name: "skill_id",
        referencedColumnName: "id"
    }
  })
  skills: Skill[]

}
