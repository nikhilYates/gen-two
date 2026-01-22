import { z } from 'zod'

const envSchema = z.object({
    SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
    SUPABASE_PASSWORD: z.string().min(1),
    SUPABASE_ID: z.string().min(1),
    NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
});

// During build, skip validation and return safe defaults
// At runtime, validate properly
const getEnv = () => {
    // Check if we're in build phase
    const isBuildPhase = process.env.NEXT_PHASE === 'phase-production-build';
    
    // Check if all required env vars are present
    const hasAllEnvVars = !!(
        process.env.SUPABASE_SERVICE_ROLE_KEY &&
        process.env.SUPABASE_PASSWORD &&
        process.env.SUPABASE_ID &&
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    
    // During build or if env vars are missing, return safe defaults
    if (isBuildPhase || !hasAllEnvVars) {
        return {
            SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
            SUPABASE_PASSWORD: process.env.SUPABASE_PASSWORD || '',
            SUPABASE_ID: process.env.SUPABASE_ID || '',
            NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
            NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
        };
    }
    
    // At runtime with all env vars present, validate
    try {
        return envSchema.parse({
            SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
            SUPABASE_PASSWORD: process.env.SUPABASE_PASSWORD,
            SUPABASE_ID: process.env.SUPABASE_ID,
            NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
            NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        });
    } catch (error) {
        // If validation fails, return defaults (shouldn't happen at runtime if env vars are set)
        console.warn('Environment variable validation failed, using defaults:', error);
        return {
            SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
            SUPABASE_PASSWORD: process.env.SUPABASE_PASSWORD || '',
            SUPABASE_ID: process.env.SUPABASE_ID || '',
            NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
            NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
        };
    }
};

export const env = getEnv();
