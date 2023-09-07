import express from 'express';

import DIContainer from '../dicontainer';
import { loadRoutes as loadAuthorRoutes } from './author';
import { loadRoutes as loadGenreRoutes } from './genre';
import { loadRoutes as loadBookRoutes } from './book';
import { loadRoutes as loadBookAuthorRoutes } from './book_author';
import { loadRoutes as loadBookGenreRoutes } from './book_genre';

function loadRoutes() {
  const authorUsecase = DIContainer.getAuthorUseCase();
  const genreUsecase = DIContainer.getGenreUseCase();
  const bookUsecase = DIContainer.getBookUseCase();
  const bookAuthorUsecase = DIContainer.getBookAuthorUseCase();
  const bookGenreUsecase = DIContainer.getBookGenreUseCase();
  const router = express.Router();
  router.use('/authors', loadAuthorRoutes(authorUsecase));
  router.use('/genres', loadGenreRoutes(genreUsecase));
  router.use('/books', loadBookRoutes(bookUsecase));
  router.use('/book/author', loadBookAuthorRoutes(bookAuthorUsecase));
  router.use('/book/genre', loadBookGenreRoutes(bookGenreUsecase));
  return router;
}

export { loadRoutes };
