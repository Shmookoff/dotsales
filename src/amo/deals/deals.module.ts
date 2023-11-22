import { Module } from '@nestjs/common';
import { DealsService } from './deals.service';
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [AccountModule],
  providers: [DealsService],
  exports: [DealsService],
})
export class DealsModule {}
