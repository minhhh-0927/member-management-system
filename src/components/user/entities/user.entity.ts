import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
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

  @Column({
    type: "int",
    nullable: true
  })
  public team_id: number;

  @Column({
    type: "int",
    nullable: true
  })
  public position_id: number;

  @CreateDateColumn({
    type: 'timestamp'
  })
  public created_at: Date

  @UpdateDateColumn({
    type: 'timestamp'
  })
  public updated_at: Date
}
