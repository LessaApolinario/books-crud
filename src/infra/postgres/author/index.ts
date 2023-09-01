import Author from '../../../core/domain/models/Author';
import AuthorAdapter from '../../../core/interfaces/adapters/AuthorAdapter';
import BasePostgresRepository from '../BasePostgresRepository';

class AuthorPostgresRepository
  extends BasePostgresRepository
  implements AuthorAdapter
{
  create(author: Author): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async fetch(): Promise<Author[]> {
    const client = await this.connect();
    const result = await client.query('SELECT * FROM author;');
    console.log(result.rows);
    this.close();
    return result.rows;
  }

  update(author: Author, id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  remove(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}

export default AuthorPostgresRepository;
