import { BadRequestException, Injectable } from '@nestjs/common';
import { CurrenciesService } from '../currencies/currencies.service';
import { ExchangeDto } from './dto/exchange.dto';
import { ExchangeResponse } from './interface/exchange.interface';

@Injectable()
export class ExchangeService {
  constructor(private readonly currenciesService: CurrenciesService) {}

  async convertAmount({
    from,
    to,
    amount,
  }: ExchangeDto): Promise<ExchangeResponse> {
    if (!from || !to || !amount) {
      throw new BadRequestException();
    }

    try {
      const currencyFrom = await this.currenciesService.getCurrency(from);
      const currencyTo = await this.currenciesService.getCurrency(to);

      return { amount: (currencyFrom.value / currencyTo.value) * amount };
    } catch (error) {
      throw new Error(error);
    }
  }
}
