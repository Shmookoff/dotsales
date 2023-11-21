import { Module } from '@nestjs/common';
import { Oauth2Service } from './oauth2.service';
import { ConfigModule } from '@nestjs/config';
import oauth2Config from './oauth2.config';

@Module({
  imports: [ConfigModule.forFeature(oauth2Config)],
  providers: [Oauth2Service],
  exports: [Oauth2Service],
})
export class Oauth2Module {}
