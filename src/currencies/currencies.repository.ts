import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import { EntityRepository, Repository } from 'typeorm';
import { CurrenciesEntity } from './currencies.entity';
import { CurrenciesInput } from './currencies.interface';

@EntityRepository(CurrenciesEntity)
export class CurrenciesRepository extends Repository<CurrenciesEntity> {
  async getCurrency(currency: string): Promise<CurrenciesEntity> {
    const result = await this.findOne({ currency });

    if (!result) {
      throw new InternalServerErrorException();
    }

    return result;
  }

  async createCurrency(
    currenciesInput: CurrenciesInput,
  ): Promise<CurrenciesEntity> {
    const createCurrency = new CurrenciesEntity();

    Object.assign(createCurrency, currenciesInput);
    try {
      await validateOrReject(createCurrency);
      await this.save(createCurrency);

      return createCurrency;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateCurrency(
    currenciesInput: CurrenciesInput,
  ): Promise<CurrenciesEntity> {
    const { currency, value } = currenciesInput;
    const result = await this.findOne({ currency });

    if (!result) {
      throw new NotFoundException(`The currency ${currency} not found.`);
    }
    try {
      result.value = value;
      await this.save(result);

      return result;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async deleteCurrency(currency: string): Promise<void> {
    return;
  }
}
