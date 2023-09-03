import Genre from '../../domain/models/Genre';

abstract class GenreAdapter {
  abstract create(genre: Genre): Promise<boolean>;
  abstract fetch(): Promise<Genre[]>;
  abstract update(genre: Genre, id: string): Promise<boolean>;
  abstract deleteGenre(id: string): Promise<boolean>;
}

export default GenreAdapter;
