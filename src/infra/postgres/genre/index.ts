import { uuid } from 'uuidv4';
import Genre from '../../../core/domain/models/Genre';
import GenreAdapter from '../../../core/interfaces/adapters/GenreAdapter';
import BasePostgresRepository from '../BasePostgresRepository';

class GenrePostgresRepository
  extends BasePostgresRepository
  implements GenreAdapter
{
  async create(genre: Genre): Promise<boolean> {
    const client = await this.connect();
    const result = await client.query(
      'INSERT INTO genre(id, name) VALUES ($1,$2) RETURNING *;',
      [uuid(), genre.name]
    );
    this.release();
    return result.rowCount > 0;
  }

  async fetch(): Promise<Genre[]> {
    const client = await this.connect();
    const result = await client.query('SELECT * FROM genre;');
    this.release();
    return result.rows.map(Genre.fromJSON);
  }

  async update(genre: Genre, id: string): Promise<boolean> {
    const client = await this.connect();
    const result = await client.query(
      'UPDATE genre SET name = $1, updated_at = $2 WHERE id = $3;',
      [genre.name, new Date(), id]
    );
    this.release();
    return result.rowCount > 0;
  }

  async deleteGenre(id: string): Promise<boolean> {
    const client = await this.connect();
    const result = await client.query('DELETE FROM genre WHERE id = $1', [id]);
    this.release();
    return result.rowCount > 0;
  }
}

export default GenrePostgresRepository;
