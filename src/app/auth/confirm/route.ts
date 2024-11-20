import { redirect } from 'next/navigation';
import { type NextRequest } from 'next/server';
import { type EmailOtpType } from '@supabase/supabase-js';
import { supabaseServer } from '@/utils/supabase/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const hash = searchParams.get('hash');
  const type = searchParams.get('type') as EmailOtpType | null;

  if (hash && type) {
    const server = await supabaseServer();

    const { error } = await server.auth.verifyOtp({
      type,
      token_hash: hash
    });
    if (!error) {
      redirect('/');
    }
  }

  redirect('/login');
}
