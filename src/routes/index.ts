import express, { Application } from "express"

import productsRouter from './products.router'
import categoriesRouter from './categories.router'
import usersRouter from './users.router'

function routerApi(app:Application) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

export default routerApi;