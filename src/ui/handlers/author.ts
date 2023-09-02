import { Request, Response } from 'express';

import { AuthorRequestParameters } from '../../core/domain/types/AuthorRequestParameters';
import { Message } from '../../core/domain/types/Message';
import AuthorUseCase from '../../core/interfaces/usecases/AuthorUseCase';

class AuthorHandler {
  private usecase: AuthorUseCase;

  constructor(usecase: AuthorUseCase) {
    this.usecase = usecase;
    this.create = this.create.bind(this);
    this.fetch = this.fetch.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(
    req: Request<{}, {}, AuthorRequestParameters>,
    res: Response<Message, {}>
  ) {
    try {
      const { author } = req.body;

      if (!!author) {
        await this.usecase.create(author);
        res.status(201).send({ message: 'Autor criado com sucesso' });
      } else {
        res.status(400).send({ message: 'Erro ao criar autor' });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      }
    }
  }

  async fetch(req: Request, res: Response) {
    try {
      const authors = await this.usecase.fetch();
      res.status(200).json(authors);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      }
    }
  }

  async delete(
    req: Request<{}, {}, AuthorRequestParameters>,
    res: Response<Message, {}>
  ) {
    try {
      const { id } = req.body;

      if (!!id) {
        await this.usecase.remove(id);
        res.status(200).send({ message: 'Author deleted successfully' });
      } else {
        res.status(400).send({ message: 'id must be provided' });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).send({ message: 'Could not delete an author' });
      }
    }
  }
}

export default AuthorHandler;
