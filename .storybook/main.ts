import { defineMain } from '@storybook/react-vite/node';

const mainConfig = defineMain({
  addons: [],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
});
export default mainConfig;
