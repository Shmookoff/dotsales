import { Controller, Get, Query } from '@nestjs/common';
import { CallbackQueryDto } from './dto/callback.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Get('callback')
  callback(@Query() query: CallbackQueryDto) {
    return this.auth.callback(query);
  }
}
