import Author from '../../../core/domain/models/Author';
import Book from '../../../core/domain/models/Book';
import BookAuthor from '../../../core/domain/models/BookAuthor';
import BookAuthorAdapter from '../../../core/interfaces/adapters/BookAuthorAdapter';
import BasePostgresRepository from '../BasePostgresRepository';

class BookAuthorPostgresRepository
  extends BasePostgresRepository
  implements BookAuthorAdapter
{
  async linkAuthor(bookAuthor: BookAuthor): Promise<boolean> {
    const client = await this.connect();
    const result = await client.query(
      'INSERT INTO book_author (book_id, author_id) VALUES ($1, $2) RETURNING *;',
      [bookAuthor.book_id, bookAuthor.author_id]
    );
    this.release();
    return result.rowCount > 0;
  }

  async fetchAuthorsByBookID(book_id: string): Promise<Author[]> {
    const client = await this.connect();
    const result = await client.query(
      `
        SELECT a.id AS id, a.name AS name, a.created_at AS created_at, a.updated_at AS updated_at
        FROM author AS a
                JOIN book_author AS ba ON a.id = ba.author_id
                JOIN book AS b ON ba.book_id = b.id
        WHERE b.id = $1
        GROUP BY a.id;
    `,
      [book_id]
    );
    this.release();
    return result.rows.map(Author.fromJSON);
  }

  async fetchBooksByAuthorID(author_id: string): Promise<Book[]> {
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
               JOIN book_author AS ba ON b.id = ba.book_id
               JOIN author AS a ON ba.author_id = a.id
      WHERE a.id = $1
      GROUP BY b.id;
    `,
      [author_id]
    );
    this.release();
    return result.rows.map(Book.fromJSON);
  }

  async unlinkAuthor(bookAuthor: BookAuthor): Promise<boolean> {
    const client = await this.connect();
    const result = await client.query(
      'DELETE FROM book_author WHERE book_id = $1 AND author_id = $2;',
      [bookAuthor.book_id, bookAuthor.author_id]
    );
    this.release();
    return result.rowCount > 0;
  }
}

export default BookAuthorPostgresRepository;
