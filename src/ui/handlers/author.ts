import { Request, Response } from 'express';

import AuthorUseCase from '../../core/interfaces/usecases/AuthorUseCase';

class AuthorHandler {
  private usecase: AuthorUseCase;

  constructor(usecase: AuthorUseCase) {
    this.usecase = usecase;
    this.fetch = this.fetch.bind(this);
  }

  async fetch(req: Request, res: Response) {
    try {
      const authors = await this.usecase.fetch();
      res.status(200).json(authors);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ error: error.message });
      }
    }
  }
}

export default AuthorHandler;
