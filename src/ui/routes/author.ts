import express from 'express';
import AuthorUseCase from '../../core/interfaces/usecases/AuthorUseCase';
import AuthorHandler from '../handlers/author';

function loadRoutes(usecase: AuthorUseCase) {
  const router = express.Router();
  const handler = new AuthorHandler(usecase);
  router.get('/', handler.fetch);
  return router;
}

export { loadRoutes };
