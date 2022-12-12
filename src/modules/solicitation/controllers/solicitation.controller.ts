import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateSolicitationDto } from '../dto/create-solicitation.dto';
import { FilterDto } from '../dto/filter.dto';
import { Solicitation } from '../entities/solicitation.entity';
import { SolicitationService } from '../services/solicitation.service';

@Controller('solicitation')
export class SolicitationController {
  constructor(private readonly solicitationService: SolicitationService) {}

  @Post()
  async create(@Body() createSolicitationDto: CreateSolicitationDto) {
    return this.solicitationService.create(createSolicitationDto);
  }

  @Get()
  async findAll(): Promise<Solicitation[]> {
    return this.solicitationService.findAll();
  }

  @Get('/search')
  async search(@Query() filter: FilterDto): Promise<Solicitation[]> {
    return this.solicitationService.findByFilter(filter);
  }
}
