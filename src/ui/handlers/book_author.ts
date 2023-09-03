import { Request, Response } from 'express';

import { BookAuthorRequestParameters } from '../../core/domain/types/params/BookAuthorRequestParameters';
import BookAuthorUseCase from '../../core/interfaces/usecases/BookAuthorUseCase';
import { Message } from '../../core/domain/types/Message';

class BookAuthorHandler {
  private usecase: BookAuthorUseCase;

  constructor(usecase: BookAuthorUseCase) {
    this.usecase = usecase;
    this.linkAuthor = this.linkAuthor.bind(this);
    this.fetchAuthorsByBookID = this.fetchAuthorsByBookID.bind(this);
    this.fetchBooksByAuthorID = this.fetchBooksByAuthorID.bind(this);
    this.unlinkAuthor = this.unlinkAuthor.bind(this);
  }

  async linkAuthor(
    req: Request<{}, {}, BookAuthorRequestParameters>,
    res: Response<Message, {}>
  ) {
    const { book_author } = req.body;

    try {
      if (!book_author) {
        res
          .status(400)
          .send({ message: 'Book and author ids must be provided' });
      } else {
        await this.usecase.linkAuthor(book_author);
        res.status(201).send({ message: 'Author linked successfully' });
      }
    } catch (error) {
      res.status(400).send({ message: 'Could not link an author to a book' });
    }
  }

  async fetchAuthorsByBookID(
    req: Request<{}, {}, BookAuthorRequestParameters>,
    res: Response
  ) {
    const { book_id } = req.body;

    try {
      if (!book_id) {
        res.status(400).send({ message: 'id must be provided' });
      } else {
        const authors = await this.usecase.fetchAuthorsByBookID(book_id);
        res.status(200).send(authors);
      }
    } catch (error) {
      res.status(400).send({ message: 'Could not fetch authors by book' });
    }
  }

  async fetchBooksByAuthorID(
    req: Request<{}, {}, BookAuthorRequestParameters>,
    res: Response
  ) {
    const { author_id } = req.body;

    try {
      if (!author_id) {
        res.status(400).send({ message: 'id must be provided' });
      } else {
        const books = await this.usecase.fetchBooksByAuthorID(author_id);
        res.status(200).send(books);
      }
    } catch (error) {
      res.status(400).send({ message: 'Could not fetch books by author' });
    }
  }

  async unlinkAuthor(
    req: Request<{}, {}, BookAuthorRequestParameters>,
    res: Response<Message, {}>
  ) {
    const { book_author } = req.body;

    try {
      if (!book_author) {
        res
          .status(400)
          .send({ message: 'Book and author ids must be provided' });
      } else {
        await this.usecase.unlinkAuthor(book_author);
        res.status(200).send({ message: 'Author unlinked successfully' });
      }
    } catch (error) {
      res.status(400).send({ message: 'Could not unlink an author to a book' });
    }
  }
}

export default BookAuthorHandler;
