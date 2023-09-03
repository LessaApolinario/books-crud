import Author from '../domain/models/Author';
import Book from '../domain/models/Book';
import BookAuthor from '../domain/models/BookAuthor';
import BookAuthorAdapter from '../interfaces/adapters/BookAuthorAdapter';
import BookAuthorUseCase from '../interfaces/usecases/BookAuthorUseCase';

class BookAuthorService extends BookAuthorUseCase {
  private adapter: BookAuthorAdapter;

  constructor(adapter: BookAuthorAdapter) {
    super();
    this.adapter = adapter;
  }

  linkAuthor(bookAuthor: BookAuthor): Promise<boolean> {
    return this.adapter.linkAuthor(bookAuthor);
  }

  fetchAuthorsByBookID(book_id: string): Promise<Author[]> {
    return this.adapter.fetchAuthorsByBookID(book_id);
  }

  fetchBooksByAuthorID(author_id: string): Promise<Book[]> {
    return this.adapter.fetchBooksByAuthorID(author_id);
  }

  unlinkAuthor(bookAuthor: BookAuthor): Promise<boolean> {
    return this.adapter.unlinkAuthor(bookAuthor);
  }
}

export default BookAuthorService;
