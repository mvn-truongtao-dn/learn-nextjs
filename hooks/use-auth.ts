import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import { authApi } from '../api-client';
export interface user {
  username: string;
  city: string;
  email: string;
}

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 360000,
    revalidateOnFocus: false,
    ...options,
  });
  console.log({profile, error});

  const firstLoading = profile === undefined && error === undefined;
  console.log(firstLoading);
  
  const login = async () => {
    await authApi.login({
      username: 'test1',
      password: '123456',
    });
    await mutate();
  };
  const logout = async () => {
    await authApi.logout();
    mutate({}, false);
  };
  return { profile, error, login, logout, firstLoading };
}
