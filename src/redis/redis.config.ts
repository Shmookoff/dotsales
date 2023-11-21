import { registerAs } from '@nestjs/config';

const redisConfig = registerAs('redis', () => ({
  REDIS_URL: process.env.REDIS_URL!,
}));

export default redisConfig;
