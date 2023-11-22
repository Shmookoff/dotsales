import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [AccountModule],
  providers: [ContactsService],
  exports: [ContactsService],
})
export class ContactsModule {}
