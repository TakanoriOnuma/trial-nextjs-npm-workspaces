import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Counter } from './Counter';

type Story = StoryObj<typeof Counter>;

const meta: Meta<typeof Counter> = {
  title: 'Counter',
  component: Counter,
  args: {
    count: 0,
    onChangeCount: fn(),
  },
};

export default meta;

export const Base: Story = {};
