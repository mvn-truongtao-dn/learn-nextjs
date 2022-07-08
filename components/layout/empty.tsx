import { LayoutProps } from '@/model/index';
import * as React from 'react';

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <div>
        {children}
    </div>
  );
}
