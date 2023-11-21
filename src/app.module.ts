import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { DealsModule } from './deals/deals.module';
import { RedisModule } from './redis/redis.module';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { AmoModule } from './amo/amo.module';
import { AccountModule } from './account/account.module';
import { ConfigModule } from '@nestjs/config';
import { appConfigSchema } from './app.config';
import { zodConfigValidator } from './lib/zod-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      validate: zodConfigValidator(appConfigSchema),
      expandVariables: true,
    }),
    DealsModule,
    ContactsModule,
    RedisModule,
    AuthModule,
    AmoModule,
    AccountModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
