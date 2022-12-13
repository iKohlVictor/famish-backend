import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { OrderItem } from '../../orderItem/entities/orderItem.entity';
import { User } from '../../user/entities/user.entity';

import { PaymentStatusEnum } from '../enum/payment-status.enum';
import { StatusSolicitationEnum } from '../enum/status-solicitation.enum';
import { TypeSolicitationEnum } from '../enum/type-solicitation.enum';

@Entity('solicitation')
export class Solicitation {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true, default: null })
  numberDesk!: number;

  @Column({
    type: 'enum',
    enum: TypeSolicitationEnum,
    default: TypeSolicitationEnum.EAT_ON_THE_SPOT,
  })
  typeSolicitation!: TypeSolicitationEnum;

  @Column({
    nullable: true,
    type: 'decimal',
    precision: 14,
    scale: 4,
    transformer: {
      from: (value: string) => Number(value),
      to: (value: number) => value,
    },
  })
  value!: number;

  @Column({
    type: 'enum',
    enum: PaymentStatusEnum,
    default: PaymentStatusEnum.PENDING,
  })
  paymentStatus: PaymentStatusEnum;

  @Column({ nullable: true })
  paymentType!: string;

  @Column({ nullable: true })
  details!: string;

  @Column({
    type: 'enum',
    enum: StatusSolicitationEnum,
    default: StatusSolicitationEnum.PENDING,
  })
  statusSolicitation!: StatusSolicitationEnum;

  @Column()
  customerId!: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'customerId' })
  customer!: User;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.solicitation, {
    cascade: true,
  })
  orderItems!: OrderItem[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
