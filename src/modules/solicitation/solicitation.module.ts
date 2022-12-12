import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitation } from './entities/solicitation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Solicitation])],
  controllers: [],
  providers: [],
})
export class SolicitationModule {}
