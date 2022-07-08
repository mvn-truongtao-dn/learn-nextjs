import { useAuth } from '@/hooks/use-auth';
import { LayoutProps } from '@/model/index';
import Link from 'next/link';
import * as React from 'react';
import { Auth } from '../common';

export function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth();
  const handleLogoutClick = async () => {
    try {
      await logout();
    } catch (error) {
      console.log('failed to logout', error);
    }
  };
  return (
    <Auth>
      <div>
        <h1>Admin Layout</h1>
        <div>Sidebar</div>
        <p>Profile: {JSON.stringify(profile)}</p>
        <button onClick={handleLogoutClick}>Logout</button>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <div>{children}</div>
      </div>
    </Auth>
  );
}
