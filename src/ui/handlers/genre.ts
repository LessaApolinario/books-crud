import { Request, Response } from 'express';

import { GenreRequestParameters } from '../../core/domain/types/params/GenreRequestParameters';
import { Message } from '../../core/domain/types/Message';
import GenreUseCase from '../../core/interfaces/usecases/GenreUseCase';

class GenreHandler {
  private usecase: GenreUseCase;

  constructor(usecase: GenreUseCase) {
    this.usecase = usecase;
    this.create = this.create.bind(this);
    this.fetch = this.fetch.bind(this);
    this.update = this.update.bind(this);
    this.deleteGenre = this.deleteGenre.bind(this);
  }

  async create(
    req: Request<{}, {}, GenreRequestParameters>,
    res: Response<Message, {}>
  ) {
    try {
      const { genre } = req.body;

      if (!!genre) {
        await this.usecase.create(genre);
        res.status(201).send({ message: 'Genre created successfully' });
      } else {
        res.status(400).send({ message: 'Genre must be provided' });
      }
    } catch (error) {
      res.status(400).send({ message: 'Could not create a genre' });
    }
  }

  async fetch(req: Request, res: Response) {
    try {
      const genres = await this.usecase.fetch();
      res.status(200).json(genres);
    } catch (error) {
      res.status(400).send({ message: 'Could not fetch genres' });
    }
  }

  async update(
    req: Request<{}, {}, GenreRequestParameters>,
    res: Response<Message, {}>
  ) {
    try {
      const { genre } = req.body;

      if (!!genre && !!genre.id) {
        await this.usecase.update(genre, genre.id);
        res.status(200).send({ message: 'Genre updated successfully' });
      } else {
        res.status(400).send({ message: 'Genre must be provided' });
      }
    } catch (error) {
      res.status(400).send({ message: 'could not update a genre' });
    }
  }

  async deleteGenre(
    req: Request<{}, {}, GenreRequestParameters>,
    res: Response<Message, {}>
  ) {
    try {
      const { id } = req.body;

      if (!!id) {
        await this.usecase.deleteGenre(id);
        res.status(200).send({ message: 'Genre deleted successfully' });
      } else {
        res.status(400).send({ message: 'id must be provided' });
      }
    } catch (error) {
      res.status(400).send({ message: 'Could not delete a genre' });
    }
  }
}

export default GenreHandler;
