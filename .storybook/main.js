const path = require('path');

module.exports = {
  stories: ['../packages/**/story.tsx'],
  // addons: [
  //   {
  //     name: '@storybook/preset-typescript',
  //     options: {
  //       tsLoaderOptions: {
  //         configFile: path.resolve(__dirname, '../tsconfig.json'),
  //       },
  //       transpileManager: true,
  //     },
  //   },
  //   {
  //     options: {
  //       parser: 'typescript',
  //     },
  //   },
  //   '@storybook/addon-knobs/register',
  //   '@storybook/addon-viewport/register',
  // ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
        },
        {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            paths: [path.resolve(__dirname, '../node_modules')],
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.externals = [
      function(context, request, callback) {
        if (request.includes('__generated__')) {
          // Externalize generated styles etc.
          return callback(null, {});
        }

        // Continue without externalizing the import
        callback();
      },
    ];

    return config;
  },
};
