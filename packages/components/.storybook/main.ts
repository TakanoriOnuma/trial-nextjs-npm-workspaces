import { StorybookConfig } from '@storybook/nextjs';

const storybookConfig: StorybookConfig = {
  stories: ['../lib/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        // useSWC: true,
      },
    },
  },
  webpackFinal: (config) => {
    // デフォルトでは以下が入っていたが、ビルド時間が分かるように'normal'に変更
    // config.stats = { preset: 'none', logging: 'error' }
    config.stats = 'normal';
    // 設定しているけど表示が変わらない？
    return config;
  },
};

export default storybookConfig;
