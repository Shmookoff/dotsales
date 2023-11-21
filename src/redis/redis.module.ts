import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import redisConfig from './redis.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forFeature(redisConfig)],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
