import { uuid } from 'uuidv4';

import Author from '../../../core/domain/models/Author';
import AuthorAdapter from '../../../core/interfaces/adapters/AuthorAdapter';
import BasePostgresRepository from '../BasePostgresRepository';

class AuthorPostgresRepository
  extends BasePostgresRepository
  implements AuthorAdapter
{
  async create(author: Author): Promise<boolean> {
    const client = await this.connect();
    const result = await client.query(
      'INSERT INTO author(id, name) VALUES ($1, $2) RETURNING *;',
      [uuid(), author.name]
    );
    this.release();
    return result.rowCount > 0;
  }

  async fetch(): Promise<Author[]> {
    const client = await this.connect();
    const result = await client.query('SELECT * FROM author;');
    this.release();
    return result.rows.map(Author.fromJSON);
  }

  async update(author: Author, id: string): Promise<boolean> {
    const client = await this.connect();
    const result = await client.query(
      'UPDATE author SET name = $1, updated_at = $2 WHERE id = $3;',
      [author.name, new Date(), id]
    );
    this.release();
    return result.rowCount > 0;
  }

  async deleteAuthor(id: string): Promise<boolean> {
    const client = await this.connect();
    const result = await client.query('DELETE FROM author WHERE id = $1;', [
      id,
    ]);
    this.release();
    return result.rowCount > 0;
  }
}

export default AuthorPostgresRepository;
