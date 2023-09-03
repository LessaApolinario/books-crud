import Genre from '../../models/Genre';

interface GenreRequestParameters {
  genre?: Genre;
  id?: string;
}

export { GenreRequestParameters };
