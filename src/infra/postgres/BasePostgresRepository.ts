import dotenv from 'dotenv';
import { Pool } from 'pg';

class BasePostgresRepository {
  protected _client: Pool;

  constructor() {
    dotenv.config();
    this._client = new Pool({
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: Number(process.env.POSTGRES_PORT),
    });
  }

  async connect() {
    return await this._client.connect();
  }

  async close() {
    await this._client.end();
  }
}

export default BasePostgresRepository;
