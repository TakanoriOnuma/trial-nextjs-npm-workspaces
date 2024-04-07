import { FC } from 'react';

import {
  Home as HomeIcon,
  Description as DescriptionIcon,
  Tab as TabIcon,
  CropPortraitOutlined as CropPortraitOutlinedIcon,
} from '@mui/icons-material';
import { NavigationList, NavigationItem } from '@pkg/components';

const ADMIN_NAVIGATION_ITEMS: NavigationItem[] = [
  { Icon: HomeIcon, title: 'トップ', href: '/', exactPath: true },
  { Icon: CropPortraitOutlinedIcon, title: 'プレーンページ', href: '/plain/' },
  { Icon: DescriptionIcon, title: 'ページ１', href: '/page1/' },
  { Icon: DescriptionIcon, title: 'ページ２', href: '/page2/' },
  { Icon: DescriptionIcon, title: 'ページ３', href: '/page3/' },
  { Icon: TabIcon, title: 'タブグループ', href: '/group/' },
];

export const AdminNavigationList: FC = () => {
  return <NavigationList navigationItems={ADMIN_NAVIGATION_ITEMS} />;
};
