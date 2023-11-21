import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class AccountService {
  private readonly accessTokenKey = 'access_token';
  private readonly refreshTokenKey = 'refresh_token';
  private readonly addressKey = 'address';

  constructor(private readonly redis: RedisService) {}

  async get() {
    const [accessToken, refreshToken, address] = await Promise.all([
      this.redis.get(this.accessTokenKey),
      this.redis.get(this.refreshTokenKey),
      this.redis.get(this.addressKey),
    ]);
    return { accessToken, refreshToken, address };
  }

  async set() {}
}
