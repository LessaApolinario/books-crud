import { uuid } from 'uuidv4';

import Book from '../../../core/domain/models/Book';
import BookAdapter from '../../../core/interfaces/adapters/BookAdapter';
import BasePostgresRepository from '../BasePostgresRepository';

class BookPostgresRepository
  extends BasePostgresRepository
  implements BookAdapter
{
  async create(book: Book): Promise<boolean> {
    const client = await this.connect();
    const result = await client.query(
      'INSERT INTO book(id, title, pages, released) VALUES ($1, $2, $3, $4) RETURNING *;',
      [uuid(), book.title, book.pages, book.released]
    );
    this.release();
    return result.rowCount > 0;
  }

  async fetch(): Promise<Book[]> {
    const client = await this.connect();
    const result = await client.query('SELECT * FROM book;');
    return result.rows.map(Book.fromJSON);
  }

  async update(book: Book, id: string): Promise<boolean> {
    const client = await this.connect();
    const result = await client.query(
      'UPDATE book SET title = $1, pages = $2, updated_at = $3 WHERE id = $4;',
      [book.title, book.pages, new Date(), id]
    );
    return result.rowCount > 0;
  }

  async deleteBook(id: string): Promise<boolean> {
    const client = await this.connect();
    const result = await client.query('DELETE FROM book WHERE id = $1;', [id]);
    return result.rowCount > 0;
  }
}

export default BookPostgresRepository;
