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

  update(author: Author, id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async remove(id: string): Promise<boolean> {
    const client = await this.connect();
    const result = await client.query('DELETE FROM author WHERE id = $1;', [
      id,
    ]);
    this.release();
    return result.rowCount > 0;
  }
}

export default AuthorPostgresRepository;
