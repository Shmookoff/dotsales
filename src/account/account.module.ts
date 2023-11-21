import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { RedisModule } from 'src/redis/redis.module';
import { Oauth2Module } from 'src/amo/oauth2/oauth2.module';

@Module({
  imports: [RedisModule, Oauth2Module],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule {}
