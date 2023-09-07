import { Request, Response } from 'express';
import { BookGenreRequestParameters } from '../../core/domain/types/params/BookGenreRequestParameters';
import { Message } from '../../core/domain/types/Message';
import BookGenreUseCase from '../../core/interfaces/usecases/BookGenreUseCase';

class BookGenreHandler {
  private usecase: BookGenreUseCase;

  constructor(usecase: BookGenreUseCase) {
    this.usecase = usecase;
    this.linkGenre = this.linkGenre.bind(this);
    this.fetchGenresByBookID = this.fetchGenresByBookID.bind(this);
    this.fetchBooksByGenreID = this.fetchBooksByGenreID.bind(this);
    this.unlinkGenre = this.unlinkGenre.bind(this);
  }

  async linkGenre(
    req: Request<{}, {}, BookGenreRequestParameters>,
    res: Response<Message, {}>
  ) {
    const { book_genre } = req.body;

    try {
      if (!book_genre) {
        res
          .status(400)
          .send({ message: 'Book and genre ids must be provided' });
      } else {
        await this.usecase.linkGenre(book_genre);
        res.status(201).send({ message: 'Genre linked successfully' });
      }
    } catch (error) {
      res.status(400).send({ message: 'Could not link genre to a book' });
    }
  }

  async fetchGenresByBookID(
    req: Request<{}, {}, BookGenreRequestParameters>,
    res: Response
  ) {
    const { book_id } = req.body;

    try {
      if (!book_id) {
        res.status(400).send({ message: 'Book id must be provided' });
      } else {
        const genres = await this.usecase.fetchGenresByBookID(book_id);
        res.status(200).send(genres);
      }
    } catch (error) {
      res.status(400).send({ message: 'Could not fetch genres from a book' });
    }
  }

  async fetchBooksByGenreID(
    req: Request<{}, {}, BookGenreRequestParameters>,
    res: Response
  ) {
    const { genre_id } = req.body;

    try {
      if (!genre_id) {
        res.status(400).send({ message: 'Genre id must provided' });
      } else {
        const books = await this.usecase.fetchBooksByGenreID(genre_id);
        res.status(200).send(books);
      }
    } catch (error) {
      res.status(400).send({ message: 'Could not fetch books from a genre' });
    }
  }

  async unlinkGenre(
    req: Request<{}, {}, BookGenreRequestParameters>,
    res: Response<Message, {}>
  ) {
    const { book_genre } = req.body;

    try {
      if (!book_genre) {
        res
          .status(400)
          .send({ message: 'Book and genre ids must be provided' });
      } else {
        await this.usecase.unlinkGenre(book_genre);
        res.status(200).send({ message: 'Genre unlinked successfully' });
      }
    } catch (error) {
      res.status(400).send({ message: 'Could not unlink a genre from a book' });
    }
  }
}

export default BookGenreHandler;
