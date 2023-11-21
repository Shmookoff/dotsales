import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const createContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

export class CreateContactDto extends createZodDto(createContactSchema) {}
