import { FC } from 'react';

import { usePathname } from 'next/navigation';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
} from '@mui/material';
import NextLink from 'next/link';
import { NavigationItem } from '../NavigationItemType';

export type NavItemProps = {
  /** ナビゲーション項目 */
  item: NavigationItem;
};

export const NavItem: FC<NavItemProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      component={NextLink}
      href={item.href}
      underline="none"
      color="inherit"
    >
      <ListItemButton
        selected={
          item.exactPath
            ? item.href === pathname
            : pathname.startsWith(item.href)
        }
      >
        {item.Icon && (
          <ListItemIcon>
            <item.Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={item.title} />
      </ListItemButton>
    </Link>
  );
};
