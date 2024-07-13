import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'senha obrigatória'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
