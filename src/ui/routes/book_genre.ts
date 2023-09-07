import express from 'express';

import BookGenreUseCase from '../../core/interfaces/usecases/BookGenreUseCase';
import BookGenreHandler from '../handlers/book_genre';

function loadRoutes(usecase: BookGenreUseCase) {
  const router = express.Router();
  const handler = new BookGenreHandler(usecase);
  router.get('/', handler.fetchGenresByBookID);
  router.get('/books', handler.fetchBooksByGenreID);
  router.post('/link', handler.linkGenre);
  router.delete('/unlink', handler.unlinkGenre);
  return router;
}

export { loadRoutes };
