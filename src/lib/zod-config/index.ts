import z from 'zod';

export const zodConfigValidator = <T extends z.ZodSchema>(
  schema: T,
): ((config?: Record<string, unknown>) => z.infer<T>) => {
  return (config) => {
    return schema.parse(config || process.env);
  };
};
