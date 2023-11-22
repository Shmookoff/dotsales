import { Module } from '@nestjs/common';
import { AmoService } from './amo.service';
import { Oauth2Module } from './oauth2/oauth2.module';
import { ClientModule } from './client/client.module';
import { DealsModule } from './deals/deals.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [Oauth2Module, ClientModule, DealsModule, ContactsModule],
  providers: [AmoService],
  exports: [AmoService],
})
export class AmoModule {}
