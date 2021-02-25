import { BadRequestException, Injectable } from '@nestjs/common';
import { CurrenciesEntity } from './entities/currencies.entity';
import { CurrenciesRepository } from './repository/currencies.repository';

@Injectable()
export class CurrenciesService {
  constructor(private readonly currenciesRepository: CurrenciesRepository) {}

  async getCurrency(currency: string): Promise<CurrenciesEntity> {
    return await this.currenciesRepository.getCurrency(currency);
  }

  async createCurrency({ currency, value }): Promise<CurrenciesEntity> {
    if (value <= 0) {
      throw new BadRequestException('The value must be greater zero.');
    }
    return await this.currenciesRepository.createCurrency({ currency, value });
  }

  async updateCurrency({ currency, value }): Promise<CurrenciesEntity> {
    if (value <= 0) {
      throw new BadRequestException('The value must be greater zero.');
    }
    return await this.currenciesRepository.updateCurrency({ currency, value });
  }

  async deleteCurrency(currency: string): Promise<void> {
    return await this.currenciesRepository.deleteCurrency(currency);
  }
}
