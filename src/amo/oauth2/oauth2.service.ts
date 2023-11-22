import { Inject, Injectable } from '@nestjs/common';
import oauth2Config from './oauth2.config';
import { ConfigType } from '@nestjs/config';
import { AbstractClientService } from '../abstract-client/abstract-client.service';

@Injectable()
export class Oauth2Service extends AbstractClientService {
  protected readonly basePath = '/oauth2';

  constructor(
    @Inject(oauth2Config.KEY)
    private readonly config: ConfigType<typeof oauth2Config>,
  ) {
    super();
  }

  async accessToken(
    options: (
      | { grant_type: 'authorization_code'; code: string }
      | { grant_type: 'refresh_token'; refresh_token: string }
    ) & {
      referer: string;
    },
  ) {
    const { referer, ...params } = options;

    const data = await this._fetch<{
      token_type: string;
      expires_in: number;
      access_token: string;
      refresh_token: string;
    }>(referer, '/access_token', {
      method: 'POST',
      body: JSON.stringify({
        ...params,
        client_id: this.config.AMO_CLIENT_ID,
        client_secret: this.config.AMO_CLIENT_SECRET,
        redirect_uri: this.config.AMO_CLIENT_REDIRECT_URI,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    return data;
  }
}
