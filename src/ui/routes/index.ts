import express from 'express';

import DIContainer from '../dicontainer';
import { loadRoutes as loadAuthorRoutes } from './author';

function loadRoutes() {
  const authorUsecase = DIContainer.getAuthorUseCase();
  const router = express.Router();
  router.use('/authors', loadAuthorRoutes(authorUsecase));
  return router;
}

export { loadRoutes };
