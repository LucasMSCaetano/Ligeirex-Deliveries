import { sync as FastGlobSync } from 'fast-glob';
import { Express, Router } from 'express';

const routes = Router();

export default function Routes (app:Express) {
  app.use(routes);
  FastGlobSync('**/src/routes/**Router.ts').forEach(file => require(`../../${file}`).default(routes));
};
