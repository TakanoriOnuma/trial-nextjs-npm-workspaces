import { FC } from 'react';

import { List } from '@mui/material';
import { NavigationItem } from './NavigationItemType';
import { NavItem } from './subComponents/NavItem';

export type NavigationListProps = {
  /** ナビゲーションリスト */
  navigationItems: NavigationItem[];
};

export const NavigationList: FC<NavigationListProps> = ({
  navigationItems,
}) => {
  return (
    <List>
      {navigationItems.map((item) => (
        <NavItem key={item.href} item={item} />
      ))}
    </List>
  );
};
