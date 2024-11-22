import { Controller, Get } from '@nestjs/common';
import { Balance } from './balance';
import { BalanceService } from './balance.service';

@Controller('/api/v1/user/balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get()
  async getBalance(): Promise<Balance[]> {
    return this.balanceService.getBalance()
  }
}
