const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');
const { StaticApp } = require('@keystonejs/app-static');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const { userIsAdmin } = require('./utils/access');
const { staticRoute, staticPath, distDir } = require('./config');
const {
  User,
  Post,
  PostCategory,
  Contact,
  ItemCategory,
  ItemPrice,
  ItemCar,
  ItemCarCategory,
  ItemService,
  ItemServiceCategory,
} = require('./schema');

const PROJECT_NAME = 'KeystoneJS Quickstart';
const adapterConfig = {
  mongoUri: 'mongodb://194.87.238.134/keystone-js-quickstart',
  cookieSecret: '6ArmOCyoLiCWMIlhOkG+6eQ+mWyFM4yF',
};
//Initialize
const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new MongooseAdapter({
    mongoUri: 'mongodb://194.87.238.134/keystone-js-quickstart',
    cookieSecret: '6ArmOCyoLiCWMIlhOkG+6eQ+mWyFM4yF',

    adapters: { MongooseAdapter: MongooseAdapter },
  }),
  sessionStore: new MongoStore({
    url: 'mongodb://194.87.238.134/keystone-js-quickstart',
  }),
}); /*
const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new MongooseAdapter(adapterConfig),
  sessionStore: new MongoStore({
    url: 'mongodb://194.87.238.134/keystone-js-quickstart',
  }),
});*/
// Load schemas
keystone.createList('User', User);
keystone.createList('PostCategory', PostCategory);
keystone.createList('Post', Post);
keystone.createList('Contact', Contact);
keystone.createList('ItemCategory', ItemCategory);
keystone.createList('ItemPrice', ItemPrice);
keystone.createList('ItemServiceCategory', ItemServiceCategory);
keystone.createList('ItemService', ItemService);
keystone.createList('ItemCar', ItemCar);
keystone.createList('ItemCarCategory', ItemCarCategory);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp({

    }),
    new StaticApp({
      path: staticRoute,
      src: staticPath,
    }),
    new AdminUIApp({
      adminPath: '/admin',
      authStrategy,
      isAccessAllowed: userIsAdmin,
      hooks: require.resolve('./admin/'),
    }),
    new NextApp({
      dir: './',
    }),
  ],
  distDir,
};
