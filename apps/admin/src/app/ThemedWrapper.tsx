'use client';

import { FC, PropsWithChildren } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@pkg/components';

export const ThemedWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  );
};
