import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'user_skills' })
export class UserSkill {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: "int",
  })
  public user_id: number;

  @Column({
    type: "int",
  })
  public skill_id: number;

  @CreateDateColumn({
    type: 'datetime'
  })
  public created_at: Date

  @UpdateDateColumn({
    type: 'datetime'
  })
  public updated_at: Date
}
