import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('solicitation')
export class Solicitation {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({ nullable: true })
  numberDesk!: number;

  @Column({ nullable: true })
  price!: number;

  @Column({ nullable: true })
  paymentType!: string;

  @Column({ nullable: true })
  details!: string;

  @Column()
  status!: string;
}
