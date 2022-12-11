import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserModule } from './user.module';
import { UserService } from './user.service';

@Module({
  imports: [UserModule],
  controllers: [UserService],
  providers: [UserController],
})
export class UserHttpModule {}
