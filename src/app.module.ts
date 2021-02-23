import { Module } from '@nestjs/common';
import { ExchangeModule } from './exchange/exchange.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 3555,
    //   username: 'postgres',
    //   password: 'pg123',
    //   database: 'postgres',
    //   autoLoadEntities: true,
    //   synchronize: false,
    // }),
    ExchangeModule,
    CurrenciesModule,
  ],
})
export class AppModule {}
