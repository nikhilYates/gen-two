import { z } from 'zod'

const envSchema = z.object({
    SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
    SUPABASE_PASSWORD: z.string().min(1),
    SUPABASE_ID: z.string().min(1),
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
});

export const env = envSchema.parse({
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    SUPABASE_PASSWORD: process.env.SUPABASE_PASSWORD,
    SUPABASE_ID: process.env.SUPABASE_ID,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});
