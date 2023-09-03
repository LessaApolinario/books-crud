import Author from '../../domain/models/Author';
import Book from '../../domain/models/Book';
import BookAuthor from '../../domain/models/BookAuthor';

abstract class BookAuthorUseCase {
  abstract linkAuthor(bookAuthor: BookAuthor): Promise<boolean>;
  abstract fetchAuthorsByBookID(book_id: string): Promise<Author[]>;
  abstract fetchBooksByAuthorID(author_id: string): Promise<Book[]>;
  abstract unlinkAuthor(bookAuthor: BookAuthor): Promise<boolean>;
}

export default BookAuthorUseCase;
