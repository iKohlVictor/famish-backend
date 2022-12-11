import { Module } from '@nestjs/common';
import { OrderItemController } from './controllers/orderItem.controller';
import { OrderItemService } from './services/orderItem.service';

@Module({
  imports: [],
  controllers: [OrderItemController],
  providers: [OrderItemService],
})
export class OrderItemModule {}
