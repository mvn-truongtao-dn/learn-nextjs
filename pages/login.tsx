import * as React from 'react';
import { authApi } from '@/api/index';
import img_avatar from '../img_avatar.png';
import Image from 'next/image';
import { useAuth } from '@/hooks/index';
import { useRouter } from 'next/router';
export default function LoginPage() {
  const router = useRouter();
  const { profile, login, logout } = useAuth({ revalidateOnMount: false });
  const handleClickLogin = async () => {
    try {
      await login();
      router.push('/about');
    } catch (error) {
      console.log('failed to login', error);
    }
  };
  const handleGetProfileClick = async () => {
    try {
      await authApi.getProfile();
    } catch (error) {
      console.log('failed to get profile', error);
    }
  };
  const handleLogoutClick = async () => {
    try {
      logout();
    } catch (error) {
      console.log('failed to logout', error);
    }
  };
  console.log(profile);

  return (
    <div>
      <h1>Login Page</h1>
      <h3>Username: {JSON.stringify(profile || {}, null, '')}</h3>
      <button onClick={handleClickLogin}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
      <button onClick={() => router.push('/about')}>Go to about</button>
    </div>
  );
}
