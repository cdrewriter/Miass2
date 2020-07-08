require('dotenv').config();

module.exports = {
  port: process.env.PORT || 80,
  staticRoute: '/public', // The URL portion
  staticPath: 'public', // The local path on disk
  distDir: './dist',
  databaseUrl: 'mongodb://194.87.238.134/keystone-js-quickstart',
};
