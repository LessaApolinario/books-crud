import BookGenre from '../../models/BookGenre';

interface BookGenreRequestParameters {
  book_genre?: BookGenre;
  book_id?: string;
  genre_id?: string;
}

export { BookGenreRequestParameters };
