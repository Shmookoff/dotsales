import { Module } from '@nestjs/common';
import { AmoService } from './amo.service';
import { Oauth2Module } from './oauth2/oauth2.module';
import { ClientModule } from './client/client.module';

@Module({
  providers: [AmoService],
  imports: [Oauth2Module, ClientModule],
  exports: [AmoService],
})
export class AmoModule {}
