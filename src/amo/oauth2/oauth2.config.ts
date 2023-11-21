import { registerAs } from '@nestjs/config';
import { zodConfigValidator } from 'src/lib/zod-config';
import z from 'zod';

const oauth2Config = registerAs(
  'oauth2',
  zodConfigValidator(
    z.object({
      AMO_CLIENT_ID: z.string(),
      AMO_CLIENT_SECRET: z.string(),
      AMO_CLIENT_REDIRECT_URI: z.string().url(),
    }),
  ),
);

export default oauth2Config;
