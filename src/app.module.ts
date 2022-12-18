import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import configuration from './common/configuration/configuration';
import { OrderItemModule } from './modules/orderItem/orderItem.module';
import { ProductModule } from './modules/product/product.module';
import { SolicitationModule } from './modules/solicitation/solicitation.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService,
      ): Promise<TypeOrmModuleAsyncOptions> => {
        const options = {
          type: configService.get('database.type'),
          host: configService.get('database.host'),
          port: configService.get('database.port'),
          username: configService.get('database.username'),
          password: configService.get('database.password'),
          database: configService.get('database.database'),
          synchronize: configService.get('database.sync'),
          autoLoadEntities: configService.get('database.autoLoadEntities'),
        } as TypeOrmModuleAsyncOptions;

        return options;
      },
    }),
    UserModule,
    ProductModule,
    SolicitationModule,
    OrderItemModule,
    AuthModule,
  ],
})
export class AppModule {}
