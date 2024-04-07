import { Meta, StoryObj } from '@storybook/react';

import {
  Home as HomeIcon,
  Description as DescriptionIcon,
  Tab as TabIcon,
} from '@mui/icons-material';
import { NavigationList } from './NavigationList';

type Story = StoryObj<typeof NavigationList>;

const meta: Meta<typeof NavigationList> = {
  title: 'NavigationList',
  component: NavigationList,
  args: {
    navigationItems: [
      { Icon: HomeIcon, title: 'トップ', href: '/', exactPath: true },
      { Icon: DescriptionIcon, title: 'ページ', href: '/page' },
      { Icon: TabIcon, title: 'タブグループ', href: '/tab' },
    ],
  },
};

export default meta;

export const Base: Story = {};
