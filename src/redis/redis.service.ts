import { Inject, Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import redisConfig from './redis.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class RedisService extends Redis {
  constructor(
    @Inject(redisConfig.KEY)
    config: ConfigType<typeof redisConfig>,
  ) {
    super(config.REDIS_URL);
  }
}
