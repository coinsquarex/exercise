import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Balance } from './balance';

@Injectable()
export class BalanceService {
  getBalance(): Balance[] {
    const userid = randomUUID();
    return [
      { user_id: userid, coin: 'CAD', balance: 78543.07 },
      { user_id: userid, coin: 'USD', balance: 100.0 },
      { user_id: userid, coin: 'GBP', balance: 0 },
    ];
  }
}
