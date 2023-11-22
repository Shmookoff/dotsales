import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const createDealSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

export class CreateDealDto extends createZodDto(createDealSchema) {}
