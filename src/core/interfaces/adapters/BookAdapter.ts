import Book from '../../domain/models/Book';

abstract class BookAdapter {
  abstract create(book: Book): Promise<boolean>;
  abstract fetch(): Promise<Book[]>;
  abstract update(book: Book, id: string): Promise<boolean>;
  abstract deleteBook(id: string): Promise<boolean>;
}

export default BookAdapter;
