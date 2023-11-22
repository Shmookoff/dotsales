import { Injectable } from '@nestjs/common';
import { Oauth2Service } from './oauth2/oauth2.service';
import { ContactsService } from './contacts/contacts.service';
import { DealsService } from './deals/deals.service';

@Injectable()
export class AmoService {
  constructor(
    readonly oauth2: Oauth2Service,
    readonly contacts: ContactsService,
    readonly deals: DealsService,
  ) {}
}
