import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect } from 'react';
export interface AuthProps {
  children: any;
}

export function Auth({ children }: AuthProps) {
  const router = useRouter();
  const { profile, firstLoading }: { profile: any; firstLoading: any } =
    useAuth();

  useEffect(() => {
    console.log('loading', !firstLoading);
    console.log('loading', !profile?.username);

    if (!firstLoading && !profile?.username) {
      router.push('/login');
    }
  }, [router,profile, firstLoading]);
  if (!profile?.username) return <p>Loading ...</p>;
  return <div>{children}</div>;
}
