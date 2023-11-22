import { Module } from '@nestjs/common';
import { DealsController } from './deals.controller';
import { AmoModule } from 'src/amo/amo.module';

@Module({
  imports: [AmoModule],
  controllers: [DealsController],
})
export class DealsModule {}
