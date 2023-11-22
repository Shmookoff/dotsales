import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { AmoModule } from 'src/amo/amo.module';

@Module({
  imports: [AmoModule],
  controllers: [ContactsController],
})
export class ContactsModule {}
