import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemController } from './controllers/orderItem.controller';
import { OrderItem } from './entities/orderItem.entity';
import { OrderItemService } from './services/orderItem.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItem])],
  controllers: [OrderItemController],
  providers: [OrderItemService],
})
export class OrderItemModule {}
