import { LayoutProps } from '@/model/index';
import Link from 'next/link';
import * as React from 'react';

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <div>
        {children}
    </div>
  );
}
