import { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

type Story = StoryObj<typeof Header>;

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  args: {
    title: 'ヘッダー',
    position: 'static',
  },
};

export default meta;

export const Base: Story = {};
