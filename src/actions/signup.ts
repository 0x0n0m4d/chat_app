'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';
import { supabaseServer } from '@/utils/supabase/server';

export async function signup(formData: FormData, request: NextRequest) {
  const server = await supabaseServer();
  const url = request.nextUrl.clone();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  };

  const { error } = await server.auth.signUp(data);

  if (error) {
    url.pathname = '/signup';
    url.searchParams.set('error', 'signup');
    redirect(url.toString());
  }

  url.pathname = '/';

  revalidatePath('/', 'layout');
  redirect(url.toString());
}
