import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const page = () => {
  return (
    <div className="w-full md:h-screen flex items-center justify-center ">
      <div className="w-[500px] flex flex-col px-4 py-4 gap-4">
        <h2 className="text-2xl">Login</h2>
        <p className=" font-light">
          Today is a new day.It s your day. You shape it. Sign in to start
          managing your projects.
        </p>
        <div className="flex flex-col gap-4">
          <Label>Email</Label>
          <Input type="text" placeholder="email" />
          <Label>Password</Label>
          <Input type="password" name="" id="" placeholder="password" />
        </div>
        <Button>Submit</Button>
        <div className="flex items-center w-full  justify-center gap-2 text-sm">
          <p>You dont have account?</p>{' '}
          <Link href={'/auth/signup'} className="text-blue-400">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
