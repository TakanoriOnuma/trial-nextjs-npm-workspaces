import { FC, PropsWithChildren } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { ThemedWrapper } from './ThemedWrapper';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <AppRouterCacheProvider>
          <ThemedWrapper>{children}</ThemedWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
