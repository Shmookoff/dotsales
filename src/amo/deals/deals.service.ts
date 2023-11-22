import { Injectable } from '@nestjs/common';
import { ClientService } from '../client/client.service';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class DealsService extends ClientService {
  constructor(account: AccountService) {
    super(account);
    this.basePath = this.basePath + '/leads';
  }

  create(contactId: number) {
    return this.fetch('', {
      body: JSON.stringify({
        _embedded: { contacts: { 0: { id: contactId, is_main: 'true' } } },
      }),
      method: 'POST',
    });
  }
}
