const env = process.env.NODE_ENV;
const isLegacyBuild = process.env.BUILD_TYPE === 'legacy';

const buildOptions = {
  comments: false,
  ignore: [
    'src/**/*.test.js',
    'src/**/test.js',
    'src/**/story.js',
    'src/**/*.story.js',
  ],
};
const removeProptypes = [
  'transform-react-remove-prop-types',
  {
    mode: 'remove',
    removeImport: true,
  },
];
const getTargets = isLegacyBuild =>
  isLegacyBuild ? { ie: '11' } : { esmodules: true };
const getPresetOptions = (env, isLegacyBuild) =>
  ({
    build: {
      modules: false,
      targets: getTargets(isLegacyBuild),
    },
    test: {
      modules: 'commonjs',
    },
  }[env]);

module.exports = {
  plugins: [
    'emotion',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-runtime',
    // '@babel/plugin-transform-typescript',
    env === 'build' && removeProptypes,
  ].filter(Boolean),

  presets: [
    ['@babel/preset-env', getPresetOptions(env, isLegacyBuild)].filter(Boolean),
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],

  ...(env === 'build' && buildOptions),
};
