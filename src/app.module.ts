import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import configuration from './common/configuration/configuration';
import { UserHttpModule } from './user/user-http.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get('database.type'),
          host: configService.get('database.host'),
          port: configService.get('database.port'),
          username: configService.get('database.user'),
          password: configService.get('database.password'),
          database: configService.get('database.name'),
          synchronize: configService.get('database.sync'),
          autoLoadEntities: configService.get('database.autoLoadEntities'),
        } as TypeOrmModuleAsyncOptions;
      },
    }),
    UserHttpModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
