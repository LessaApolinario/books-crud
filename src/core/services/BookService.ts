import Book from '../domain/models/Book';
import BookAdapter from '../interfaces/adapters/BookAdapter';
import BookUseCase from '../interfaces/usecases/BookUseCase';

class BookService extends BookUseCase {
  private adapter: BookAdapter;

  constructor(adapter: BookAdapter) {
    super();
    this.adapter = adapter;
  }

  create(book: Book): Promise<boolean> {
    return this.adapter.create(book);
  }

  fetch(): Promise<Book[]> {
    return this.adapter.fetch();
  }

  update(book: Book, id: string): Promise<boolean> {
    return this.adapter.update(book, id);
  }

  deleteBook(id: string): Promise<boolean> {
    return this.adapter.deleteBook(id);
  }
}

export default BookService;
