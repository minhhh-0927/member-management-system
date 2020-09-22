import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'skills' })
export class Skill {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: "varchar",
    length: 255
  })
  public name: string;

  @Column({
    type: "varchar",
  })
  public level: string;

  @Column({
    type: "int",
  })
  public experience_year: number;

  @CreateDateColumn({
    type: 'datetime'
  })
  public created_at: Date

  @UpdateDateColumn({
    type: 'datetime'
  })
  public updated_at: Date
}
