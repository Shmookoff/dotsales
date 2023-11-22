import { Injectable } from '@nestjs/common';
import { ClientService } from '../client/client.service';
import { AccountService } from 'src/account/account.service';
import { ContactsList } from './types/list';
import { stringify } from 'qs';
import { z } from 'zod';
import { createContactSchema } from 'src/contacts/dto/create-contact.dto';
import { AmoUpdate } from '../types/update';
import { AmoCreate } from '../types/create';

@Injectable()
export class ContactsService extends ClientService {
  constructor(account: AccountService) {
    super(account);
    this.basePath = this.basePath + '/contacts';
  }

  list(options?: { query: string }) {
    return this.fetch<ContactsList | null>(
      stringify(options, { addQueryPrefix: true }),
    );
  }

  processNewData(data: z.infer<typeof createContactSchema>) {
    return {
      custom_fields_values: [
        {
          field_code: 'PHONE',
          values: [
            {
              value: data.phone,
              enum_code: 'WORK',
            },
          ],
        },
        {
          field_code: 'EMAIL',
          values: [
            {
              value: data.email,
              enum_code: 'WORK',
            },
          ],
        },
      ],
    };
  }

  update(id: number, data: z.infer<typeof createContactSchema>) {
    return this.fetch<AmoUpdate>(`/${id}`, {
      body: JSON.stringify({
        name: data.name,
        id,
        ...this.processNewData(data),
      }),
      method: 'PATCH',
    });
  }

  create(data: z.infer<typeof createContactSchema>) {
    return this.fetch<AmoCreate>('', {
      body: JSON.stringify({
        name: [data.name],
        ...this.processNewData(data),
      }),
      method: 'POST',
    });
  }

  async upsert(data: z.infer<typeof createContactSchema>) {
    const foundContacts = await this.list({ query: data.phone });
    if (!foundContacts) {
      return this.create(data);
    }
    const contact = foundContacts._embedded.contacts[0];
    return this.update(contact.id, data);
  }

  read(id: number) {
    return this.fetch(`/${id}`);
  }
}
