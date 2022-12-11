import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProfileEnum } from '../enum/profile.enum';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  address: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  password: string;

  @Column({ unique: true })
  cpf!: string;

  @Column({ type: 'enum', enum: ProfileEnum, default: ProfileEnum.CUSTOMER })
  profile: ProfileEnum;
}
