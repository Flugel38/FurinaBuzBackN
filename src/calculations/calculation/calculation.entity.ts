import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('calculations')
export class Calculation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expression: string;

  @Column()
  result: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
