import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { callbackQuerySchema } from './dto/callback.dto';
import { AmoService } from 'src/amo/amo.service';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly amo: AmoService,
    private readonly account: AccountService,
  ) {}

  async callback({ code, referer }: z.infer<typeof callbackQuerySchema>) {
    const { access_token, expires_in, refresh_token } =
      await this.amo.oauth2.accessToken({
        grant_type: 'authorization_code',
        code,
        referer,
      });
    await this.account.set({
      accessToken: { value: access_token, expiresIn: expires_in },
      refreshToken: { value: refresh_token },
      address: { value: referer },
    });
    return { url: 'https://' + referer };
  }
}
