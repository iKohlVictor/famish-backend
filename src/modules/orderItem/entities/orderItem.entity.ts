import { Product } from '../../product/entities/product.entity';
import { Solicitation } from '../../solicitation/entities/solicitation.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('order_item')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  quantity!: number;

  @Column()
  productId!: number;

  @OneToOne(() => Product)
  @JoinColumn({ name: 'productId' })
  product!: Product;

  @ManyToOne(() => Solicitation, (solicitation) => solicitation.orderItems)
  solicitation!: Solicitation;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
