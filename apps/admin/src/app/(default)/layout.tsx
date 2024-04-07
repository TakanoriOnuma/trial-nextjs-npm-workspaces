import type { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';
import { ContentLayout } from './ContentLayout';
import { BaseRootLayout } from '../BaseRootLayout';

export const metadata: Metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

const DefaultRootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BaseRootLayout>
      <ContentLayout>{children}</ContentLayout>
    </BaseRootLayout>
  );
};

export default DefaultRootLayout;