import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
const page = () => {
  const signup = async (formdata) => {
    'use server';
    // const name = formdata.get('name');
    // const lastname = formdata.get('lastname');
    const gmail = formdata.get('gmail');
    const password = formdata.get('password');

    const supabase = createServerActionClient({
      cookies,
    });

    const { data, error } = await supabase.auth.signUp({
      email: gmail,
      password: password,
      // options: {
      emailRedirectTo: `http://localhost:3000/api/auth/callback`,
    });

    if (error) throw error;

    console.log(data);
  };
  return (
    <div className="w-full  md:h-screen flex items-center justify-center">
      <div className="w-[500px] flex flex-col px-4 py-4 gap-4">
        <h2 className="text-2xl">Register</h2>
        <form action={signup} className="flex flex-col gap-4">
          <Input type="text" placeholder="name" name="name" />
          <Input type="text" placeholder="lastname" name="lastname" />
          <Input type="text" placeholder="email" name="gmail" />
          <Input type="password" placeholder="password" name="password" />
          <Button>Submit</Button>
        </form>
        <div className="flex items-center w-full  justify-center gap-2 text-sm">
          <p>You have account?</p>{' '}
          <Link href={'/auth/signin'} className="text-blue-400">
            Signin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
