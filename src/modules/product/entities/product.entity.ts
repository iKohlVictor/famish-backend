import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryEnum } from '../enums/category.enum';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column()
  name!: string;

  @Column()
  description!: string;

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
  price!: number;

  @Column()
  imageUri!: string;

  @Column({
    type: 'enum',
    enum: CategoryEnum,
  })
  category!: CategoryEnum;
}
