import { LayoutProps } from '@/model/index';
import Link from 'next/link';
import * as React from 'react';

export function MainLayout({ children }: LayoutProps) {
  React.useEffect(() => {
    console.log('mouting');
    return () => console.log('unmouting');
  }, []);
  return (
    <div>
      <h1>Main Layout</h1>
      <div>Sidebar</div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <div>{children}</div>
    </div>
  );
}
