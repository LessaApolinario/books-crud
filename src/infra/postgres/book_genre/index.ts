import Book from '../../../core/domain/models/Book';
import BookGenre from '../../../core/domain/models/BookGenre';
import Genre from '../../../core/domain/models/Genre';
import BookGenreAdapter from '../../../core/interfaces/adapters/BookGenreAdapter';
import BasePostgresRepository from '../BasePostgresRepository';

class BookGenrePostgresRepository
  extends BasePostgresRepository
  implements BookGenreAdapter
{
  async linkGenre(bookGenre: BookGenre): Promise<boolean> {
    const client = await this.connect();
    const result = await client.query(
      'INSERT INTO book_genre (book_id, genre_id) VALUES ($1, $2) RETURNING *;',
      [bookGenre.book_id, bookGenre.genre_id]
    );
    this.release();
    return result.rowCount > 0;
  }

  async fetchGenresByBookID(book_id: string): Promise<Genre[]> {
    const client = await this.connect();
    const result = await client.query(
      `
      SELECT g.id AS id, g.name AS name, g.created_at AS created_at, g.updated_at AS updated_at
      FROM genre AS g
              JOIN book_genre AS bg ON g.id = bg.genre_id
              JOIN book AS b ON bg.book_id = b.id
      WHERE b.id = $1
      GROUP BY g.id;
    `,
      [book_id]
    );
    this.release();
    return result.rows.map(Genre.fromJSON);
  }

  async fetchBooksByGenreID(genre_id: string): Promise<Book[]> {
    const client = await this.connect();
    const result = await client.query(
      `
      SELECT b.id         AS id,
             b.title      AS title,
             b.pages      AS pages,
             b.released   AS released,
             b.created_at AS created_at,
             b.updated_at AS updated_at
      FROM book AS b
          JOIN book_genre AS bg ON b.id = bg.book_id
          JOIN genre AS g ON bg.genre_id = g.id
      WHERE g.id = $1
      GROUP BY b.id;
      `,
      [genre_id]
    );
    this.release();
    return result.rows.map(Book.fromJSON);
  }

  async unlinkGenre(bookGenre: BookGenre): Promise<boolean> {
    const client = await this.connect();
    const result = await client.query(
      'DELETE FROM book_genre WHERE book_id = $1 AND genre_id = $2;',
      [bookGenre.book_id, bookGenre.genre_id]
    );
    this.release();
    return result.rowCount > 0;
  }
}

export default BookGenrePostgresRepository;
