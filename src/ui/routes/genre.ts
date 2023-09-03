import express from 'express';

import GenreUseCase from '../../core/interfaces/usecases/GenreUseCase';
import GenreHandler from '../handlers/genre';

function loadRoutes(usecase: GenreUseCase) {
  const router = express.Router();
  const handler = new GenreHandler(usecase);
  router.get('/', handler.fetch);
  router.post('/create', handler.create);
  router.put('/update', handler.update);
  router.delete('/delete', handler.deleteGenre);
  return router;
}

export { loadRoutes };
