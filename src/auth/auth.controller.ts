import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { CallbackQueryDto } from './dto/callback.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Get('callback')
  @Redirect()
  callback(@Query() query: CallbackQueryDto) {
    return this.auth.callback(query);
  }
}
