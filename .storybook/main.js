const reactRefresh = require('@vitejs/plugin-react-refresh');
const tsconfigPaths = require('vite-tsconfig-paths');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.plugins = [
      ...config.plugins,
      reactRefresh(),
      tsconfigPaths()
    ];

    // return the customized config
    return config;
},
}