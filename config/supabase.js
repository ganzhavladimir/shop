import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ajregnielvbiwymdeyvg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqcmVnbmllbHZiaXd5bWRleXZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NjEwMDcsImV4cCI6MjA1MzEzNzAwN30.6hliRKWEZc1SWgCs32vk_GKYHFCu6XZDBlZtb_Ubqmo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);