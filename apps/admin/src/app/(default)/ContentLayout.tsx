'use client';

import { FC, PropsWithChildren } from 'react';
import { Box, Drawer } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Header, HeaderWrapper } from '@pkg/components';
import { AdminNavigationList } from './AdminNavigationList';

const NAVIGATION_WIDTH = 280;

export type ContentLayoutProps = PropsWithChildren;

export const ContentLayout: FC<ContentLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Header title="NPM Workspacesの検証" position="fixed" />
      <Drawer
        variant="permanent"
        open
        sx={{
          width: NAVIGATION_WIDTH,
          '& .MuiDrawer-paper': {
            width: NAVIGATION_WIDTH,
          },
        }}
      >
        <HeaderWrapper />
        <AdminNavigationList />
      </Drawer>
      <Box sx={{ flex: '1 1 0', display: 'flex', flexDirection: 'column' }}>
        <HeaderWrapper />
        <Box sx={{ flex: '1 1 0', p: 2, overflow: 'hidden' }}>{children}</Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: (theme) => theme.spacing(1, 2),
            backgroundColor: grey[200],
          }}
        >
          フッター
        </Box>
      </Box>
    </Box>
  );
};
