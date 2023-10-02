import { createClient } from '@supabase/supabase-js';
import type { Database } from '../database.types';

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE,
  import.meta.env.VITE_ANON_SUPABASE
);
