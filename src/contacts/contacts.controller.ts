import { Controller, Get, Query } from '@nestjs/common';
import { AmoService } from 'src/amo/amo.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly amo: AmoService) {}

  @Get()
  list(@Query('query') query: string) {
    return this.amo.contacts.list({
      query,
    });
  }
}
