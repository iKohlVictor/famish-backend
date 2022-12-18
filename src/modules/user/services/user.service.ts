import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from 'src/common/encrypt/bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const password = await hashPassword(createUserDto.password);

    const user = await this.userRepository.save({
      ...createUserDto,
      password,
    });

    delete user.password;

    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findByCpf(cpf: string): Promise<User> {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.cpf = :cpf', { cpf })
      .getOne();
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email })
      .getOne();
  }
}
