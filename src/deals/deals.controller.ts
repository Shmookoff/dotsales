import { Controller, Get, Query } from '@nestjs/common';
import { CreateDealDto } from './dto/create-deal.dto';
import { AmoService } from 'src/amo/amo.service';

@Controller('deals')
export class DealsController {
  constructor(private readonly amo: AmoService) {}

  @Get()
  async create(@Query() data: CreateDealDto) {
    const contact = await this.amo.contacts.upsert(data);
    console.log(contact);
    return this.amo.deals.create(contact.id);
  }
}
