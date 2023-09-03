import express from 'express';

import DIContainer from '../dicontainer';
import { loadRoutes as loadAuthorRoutes } from './author';
import { loadRoutes as loadGenreRoutes } from './genre';
import { loadRoutes as loadBookRoutes } from './book';
import { loadRoutes as loadBookAuthorRoutes } from './book_author';

function loadRoutes() {
  const authorUsecase = DIContainer.getAuthorUseCase();
  const genreUsecase = DIContainer.getGenreUseCase();
  const bookUsecase = DIContainer.getBookUseCase();
  const bookAuthorUsecase = DIContainer.getBookAuthorUseCase();
  const router = express.Router();
  router.use('/authors', loadAuthorRoutes(authorUsecase));
  router.use('/genres', loadGenreRoutes(genreUsecase));
  router.use('/books', loadBookRoutes(bookUsecase));
  router.use('/book/author', loadBookAuthorRoutes(bookAuthorUsecase));
  return router;
}

export { loadRoutes };
