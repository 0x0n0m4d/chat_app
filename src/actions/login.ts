'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { supabaseServer } from '@/utils/supabase/server';

export async function login(formData: FormData) {
  const server = await supabaseServer();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  };

  const { error } = await server.auth.signInWithPassword(data);

  if (error) {
    // @todo: when redirect back, a login failure message should appear.
    redirect('/login');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
