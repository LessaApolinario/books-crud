import express from 'express';

import BookUseCase from '../../core/interfaces/usecases/BookUseCase';
import BookHandler from '../handlers/book';

function loadRoutes(usecase: BookUseCase) {
  const router = express.Router();
  const handler = new BookHandler(usecase);
  router.get('/', handler.fetch);
  router.post('/create', handler.create);
  router.put('/update', handler.update);
  router.delete('/delete', handler.deleteBook);
  return router;
}

export { loadRoutes };
