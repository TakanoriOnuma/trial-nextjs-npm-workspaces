import { FC } from 'react';
import { AppBar, AppBarProps, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderWrapper = styled(Toolbar)();

export type HeaderProps = {
  /** タイトル */
  title: string;
} & Pick<AppBarProps, 'position'>;

export const Header: FC<HeaderProps> = ({ title, position }) => {
  return (
    <AppBar
      position={position}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <HeaderWrapper>
        <Typography variant="h6">{title}</Typography>
      </HeaderWrapper>
    </AppBar>
  );
};
