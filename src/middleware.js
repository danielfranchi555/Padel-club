import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.rewrite(new URL('/auth/signin', req.url));
  }
  return res;
}
// Ensure the middleware is only called for relevant paths.
export const config = {
  matcher: ['/', '/cancha/:path*'],
};
