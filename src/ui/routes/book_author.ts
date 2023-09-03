import express from 'express';

import BookAuthorUseCase from '../../core/interfaces/usecases/BookAuthorUseCase';
import BookAuthorHandler from '../handlers/book_author';

function loadRoutes(usecase: BookAuthorUseCase) {
  const router = express.Router();
  const handler = new BookAuthorHandler(usecase);
  router.get('/', handler.fetchAuthorsByBookID);
  router.get('/books', handler.fetchBooksByAuthorID);
  router.post('/link', handler.linkAuthor);
  router.delete('/unlink', handler.unlinkAuthor);
  return router;
}

export { loadRoutes };
