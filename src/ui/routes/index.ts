import express from 'express';

import DIContainer from '../dicontainer';
import { loadRoutes as loadAuthorRoutes } from './author';
import { loadRoutes as loadGenreRoutes } from './genre';

function loadRoutes() {
  const authorUsecase = DIContainer.getAuthorUseCase();
  const genreUsecase = DIContainer.getGenreUseCase();
  const router = express.Router();
  router.use('/authors', loadAuthorRoutes(authorUsecase));
  router.use('/genres', loadGenreRoutes(genreUsecase));
  return router;
}

export { loadRoutes };
