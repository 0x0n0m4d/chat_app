'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';
import { supabaseBrowser } from '@/lib/supabase/browser';
import { supabaseServer } from '@/utils/supabase/server';

export async function login(formData: FormData, request: NextRequest) {
  const server = await supabaseServer();
  const url = request.nextUrl.clone();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  };

  const { error } = await server.auth.signInWithPassword(data);

  if (error) {
    url.pathname = '/login';
    url.searchParams.set('error', 'login');
    redirect(url.toString());
  }

  url.pathname = '/';

  revalidatePath('/', 'layout');
  redirect(url.toString());
}

export async function loginWithGithub() {
  const browser = supabaseBrowser();
}
