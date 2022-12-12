import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSolicitationDto } from '../dto/create-solicitation.dto';
import { FilterDto } from '../dto/filter.dto';
import { Solicitation } from '../entities/solicitation.entity';

@Injectable()
export class SolicitationService {
  constructor(
    @InjectRepository(Solicitation)
    private readonly solicitationRepository: Repository<Solicitation>,
  ) {}

  async create(solicitation: CreateSolicitationDto): Promise<Solicitation> {
    return this.solicitationRepository.save(solicitation);
  }

  async findAll(): Promise<Solicitation[]> {
    return this.solicitationRepository.find();
  }

  async findByFilter(filter: FilterDto): Promise<Solicitation[]> {
    const query = this.solicitationRepository
      .createQueryBuilder('solicitation')
      .innerJoinAndSelect('solicitation.orderItems', 'orderItems')
      .where('1=1');

    filter.name &&
      query.andWhere('solicitation.name = :name', { name: filter.name });

    filter.numberDesk &&
      query.andWhere('solicitation.numberDesk = :numberDesk', {
        numberDesk: filter.numberDesk,
      });

    filter.typeSolicitation &&
      query.andWhere('solicitation.typeSolicitation = :typeSolicitation', {
        typeSolicitation: filter.typeSolicitation,
      });

    filter.paymentStatus &&
      query.andWhere('solicitation.paymentStatus = :paymentStatus', {
        paymentStatus: filter.paymentStatus,
      });

    filter.statusSolicitation &&
      query.andWhere('solicitation.statusSolicitation = :statusSolicitation', {
        statusSolicitation: filter.statusSolicitation,
      });

    filter.customerId &&
      query.andWhere('solicitation.customerId = :customerId', {
        customerId: filter.customerId,
      });

    filter.productId &&
      query.andWhere('orderItems.productId = :productId', {
        productId: filter.productId,
      });

    return query.getMany();
  }
}
