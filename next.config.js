const withSass = require('@zeit/next-sass');
const { withGraphQLConfig } = require('next-graphql-react/server');
const { distDir } = require('./config');
const withFonts = require('nextjs-fonts');

module.exports = withGraphQLConfig(
  withSass(withFonts(), {
    dev: process.env.NODE_ENV === 'development',
    distDir: `${distDir}/www`,
  })
);
module.exports = withSass(
  withFonts({
    webpack(config, options) {
      return config;
    },
  })
);
