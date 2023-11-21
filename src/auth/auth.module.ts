import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AmoModule } from 'src/amo/amo.module';
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [AmoModule, AccountModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
