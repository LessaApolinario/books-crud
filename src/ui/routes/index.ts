import express from 'express';

import DIContainer from '../dicontainer';
import { loadRoutes as loadAuthorRoutes } from './author';
import { loadRoutes as loadGenreRoutes } from './genre';
import { loadRoutes as loadBookRoutes } from './book';

function loadRoutes() {
  const authorUsecase = DIContainer.getAuthorUseCase();
  const genreUsecase = DIContainer.getGenreUseCase();
  const bookUsecase = DIContainer.getBookUseCase();
  const router = express.Router();
  router.use('/authors', loadAuthorRoutes(authorUsecase));
  router.use('/genres', loadGenreRoutes(genreUsecase));
  router.use('/books', loadBookRoutes(bookUsecase));
  return router;
}

export { loadRoutes };
