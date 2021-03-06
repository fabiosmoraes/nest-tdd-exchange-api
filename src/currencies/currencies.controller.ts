import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CurrenciesEntity } from './entities/currencies.entity';
import { CurrenciesService } from './currencies.service';
import { CurrenciesDto } from './dto/currencies.dto';

@Controller('currencies')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Get('/:currency')
  async getCurrency(
    @Param('currency') currency: string,
  ): Promise<CurrenciesEntity> {
    return await this.currenciesService.getCurrency(currency);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createCurrency(
    @Body() currenciesDto: CurrenciesDto,
  ): Promise<CurrenciesEntity> {
    return await this.currenciesService.createCurrency(currenciesDto);
  }

  @Patch('/:currency/value')
  async updateCurrency(
    @Param('currency') currency: string,
    @Body('value') value: number,
  ) {
    return await this.currenciesService.updateCurrency({ currency, value });
  }

  @Delete('/:currency')
  async deleteCurrency(@Param('currency') currency: string): Promise<void> {
    return await this.currenciesService.deleteCurrency(currency);
  }
}
