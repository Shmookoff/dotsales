import { Injectable } from '@nestjs/common';
import { Oauth2Service } from 'src/amo/oauth2/oauth2.service';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class AccountService {
  private readonly accessTokenKey = 'access_token';
  private readonly refreshTokenKey = 'refresh_token';
  private readonly addressKey = 'address';

  constructor(
    private readonly redis: RedisService,
    private readonly oauth2: Oauth2Service,
  ) {}

  async get() {
    const [accessToken, refreshToken, address] = await Promise.all([
      this.redis.get(this.accessTokenKey),
      this.redis.get(this.refreshTokenKey),
      this.redis.get(this.addressKey),
    ]);
    if (accessToken && refreshToken && address)
      return { accessToken, refreshToken, address };
    if (refreshToken && address) {
      const creds = await this.oauth2.accessToken({
        grant_type: 'refresh_token',
        referer: address,
        refresh_token: refreshToken,
      });
      await this.set({
        accessToken: { value: creds.access_token, expiresIn: creds.expires_in },
        refreshToken: { value: creds.refresh_token },
        address: { value: address },
      });
      return {
        accessToken: creds.access_token,
        refreshToken: creds.refresh_token,
        address,
      };
    }
    throw new Error('Could not get account');
  }

  async set(options: {
    accessToken: { value: string; expiresIn: number };
    refreshToken: { value: string };
    address: { value: string };
  }) {
    await Promise.all([
      this.redis.set(
        this.accessTokenKey,
        options.accessToken.value,
        'EX',
        options.accessToken.expiresIn,
      ),
      this.redis.set(this.refreshTokenKey, options.refreshToken.value),
      this.redis.set(this.addressKey, options.address.value),
    ]);
  }
}
