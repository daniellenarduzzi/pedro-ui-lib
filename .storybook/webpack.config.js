const path = require('path');

const getReactAlias = () => {
  if (process.env.LIBRARY && process.env.LIBRARY.toLowerCase() === 'preact') {
    return {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    };
  }
};

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  config.resolve.alias = {
    ...config.resolve.alias,
    testHelpers: path.resolve(__dirname, '../testing'),
    ...getReactAlias(),
    '@utils': path.resolve(__dirname, '../packages/vis/src', 'utils'),
    '@components': path.resolve(__dirname, '../packages/vis/src', 'components'),
    '@typings': path.resolve(__dirname, '../packages/vis/src', 'typings'),
    '@charts': path.resolve(__dirname, '../packages/vis/src', 'charts'),
    '@constants': path.resolve(__dirname, '../packages/vis/src', 'constants'),
  };

  config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];

  config.module.rules.push({
    test: /\.?story\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    loader: require.resolve('babel-loader'),
  });

  // Return the altered config
  return config;
};
