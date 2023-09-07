import Book from '../../domain/models/Book';
import BookGenre from '../../domain/models/BookGenre';
import Genre from '../../domain/models/Genre';

abstract class BookGenreAdapter {
  abstract linkGenre(bookGenre: BookGenre): Promise<boolean>;
  abstract fetchGenresByBookID(book_id: string): Promise<Genre[]>;
  abstract fetchBooksByGenreID(genre_id: string): Promise<Book[]>;
  abstract unlinkGenre(bookGenre: BookGenre): Promise<boolean>;
}

export default BookGenreAdapter;
