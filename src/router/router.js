/**
 * Create by geekeryoung on 2020/3/30
 *
 * main router
 */

const Router = require('@koa/router');

const rootRouter = require('./rootRouter');
const roomRouter = require('./roomRouter');
const messageRouter = require('./messageRouter');
const friendshipRouter = require('./friendshipRouter');

const router = new Router();

/**
 * register router
 * @param app
 * @param puppet
 */
module.exports = async (app, puppet) => {

  router.prefix(puppet.prefix || '/mock');

  // root router
  await rootRouter(router, puppet);

  // room router
  await roomRouter(router, puppet);

  // message router
  await messageRouter(router, puppet);

  // friendship router
  await friendshipRouter(router, puppet);

  // register router
  app.use(router.routes());
  app.use(router.allowedMethods());
};
