import { Injectable } from '@nestjs/common';
import { createContactSchema } from './dto/create-contact.dto';
import { z } from 'zod';

@Injectable()
export class ContactsService {
  create(contact: z.infer<typeof createContactSchema>) {}
}
