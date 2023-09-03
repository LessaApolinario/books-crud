import { Request, Response } from 'express';

import { BookRequestParameters } from '../../core/domain/types/BookRequestParameters';
import { Message } from '../../core/domain/types/Message';
import BookUseCase from '../../core/interfaces/usecases/BookUseCase';

class BookHandler {
  private usecase: BookUseCase;

  constructor(usecase: BookUseCase) {
    this.usecase = usecase;
    this.create = this.create.bind(this);
    this.fetch = this.fetch.bind(this);
    this.update = this.update.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  async create(
    req: Request<{}, {}, BookRequestParameters>,
    res: Response<Message, {}>
  ) {
    const { book } = req.body;

    try {
      if (!book) {
        res.status(400).send({ message: 'Book must be provided' });
      } else {
        await this.usecase.create(book);
        res.status(201).send({ message: 'Book created successfully' });
      }
    } catch (error) {
      res.status(400).send({ message: 'Could not create a book' });
    }
  }

  async fetch(req: Request, res: Response) {
    try {
      const books = await this.usecase.fetch();
      res.status(200).json(books);
    } catch (error) {
      res.status(400).send({ message: 'Could not fetch books' });
    }
  }

  async update(
    req: Request<{}, {}, BookRequestParameters>,
    res: Response<Message, {}>
  ) {
    const { book, id } = req.body;

    try {
      if (!id) {
        res.status(400).send({ message: 'id must be provided' });
      } else if (!book) {
        res.status(400).send({ message: 'Book must be provided' });
      } else {
        await this.usecase.update(book, id);
        res.status(200).send({ message: 'Book updated successfully' });
      }
    } catch (error) {
      res.status(400).send({ message: 'Could not update a book' });
    }
  }

  async deleteBook(
    req: Request<{}, {}, BookRequestParameters>,
    res: Response<Message, {}>
  ) {
    const { id } = req.body;

    try {
      if (!id) {
        res.status(400).send({ message: 'id must be provided' });
      } else {
        await this.usecase.deleteBook(id);
        res.status(200).send({ message: 'Book deleted successfully' });
      }
    } catch (error) {
      res.status(400).send({ message: 'Could not delete a book' });
    }
  }
}

export default BookHandler;
