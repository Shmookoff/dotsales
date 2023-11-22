import { AbstractClientService } from '../abstract-client/abstract-client.service';
import { AccountService } from 'src/account/account.service';

export class ClientService extends AbstractClientService {
  constructor(private readonly account: AccountService) {
    super();
  }

  protected basePath = '/api/v4';

  async fetch<T>(path: string, init?: RequestInit | undefined): Promise<T> {
    const { address, accessToken } = await this.account.get();

    return this._fetch(address, path, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      ...init,
    });
  }
}
