import { Column, CreateDateColumn, Entity, Generated, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Users } from '../../user/entities/user.entity';

@Entity({ name: 'positions' })
export class Position {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public name: string;

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
