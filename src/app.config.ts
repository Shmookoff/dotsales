import { z } from 'nestjs-zod/z';

export const appConfigSchema = z.object({
  REDIS_URL: z.string().url(),
  AMO_CLIENT_ID: z.string(),
  AMO_CLIENT_SECRET: z.string(),
  AMO_CLIENT_REDIRECT_URI: z.string().url(),
});
