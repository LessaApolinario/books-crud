import Genre from '../domain/models/Genre';
import GenreAdapter from '../interfaces/adapters/GenreAdapter';
import GenreUseCase from '../interfaces/usecases/GenreUseCase';

class GenreService extends GenreUseCase {
  private adapter: GenreAdapter;

  constructor(adapter: GenreAdapter) {
    super();
    this.adapter = adapter;
  }

  create(genre: Genre): Promise<boolean> {
    return this.adapter.create(genre);
  }

  fetch(): Promise<Genre[]> {
    return this.adapter.fetch();
  }

  update(genre: Genre, id: string): Promise<boolean> {
    return this.adapter.update(genre, id);
  }

  deleteGenre(id: string): Promise<boolean> {
    return this.adapter.deleteGenre(id);
  }
}

export default GenreService;
