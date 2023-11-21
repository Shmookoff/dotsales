import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const callbackQuerySchema = z.object({
  code: z.string(),
  state: z.string().optional(),
  referer: z.string(),
  from_widget: z.any(),

  platform: z.enum(['1', '2']),
});

export class CallbackQueryDto extends createZodDto(callbackQuerySchema) {}
