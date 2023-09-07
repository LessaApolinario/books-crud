import Book from '../domain/models/Book';
import BookGenre from '../domain/models/BookGenre';
import Genre from '../domain/models/Genre';
import BookGenreAdapter from '../interfaces/adapters/BookGenreAdapter';
import BookGenreUseCase from '../interfaces/usecases/BookGenreUseCase';

class BookGenreService extends BookGenreUseCase {
  private adapter: BookGenreAdapter;

  constructor(adapter: BookGenreAdapter) {
    super();
    this.adapter = adapter;
  }

  linkGenre(bookGenre: BookGenre): Promise<boolean> {
    return this.adapter.linkGenre(bookGenre);
  }

  fetchGenresByBookID(book_id: string): Promise<Genre[]> {
    return this.adapter.fetchGenresByBookID(book_id);
  }

  fetchBooksByGenreID(genre_id: string): Promise<Book[]> {
    return this.adapter.fetchBooksByGenreID(genre_id);
  }

  unlinkGenre(bookGenre: BookGenre): Promise<boolean> {
    return this.adapter.unlinkGenre(bookGenre);
  }
}

export default BookGenreService;
