import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const callbackQuerySchema = z.object({
  code: z.string(),
});

export class CallbackQueryDto extends createZodDto(callbackQuerySchema) {}
