import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { callbackQuerySchema } from './dto/callback.dto';

@Injectable()
export class AuthService {
  constructor() {}

  callback({ code }: z.infer<typeof callbackQuerySchema>) {}
}
