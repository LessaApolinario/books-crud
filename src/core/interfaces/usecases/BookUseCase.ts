import Book from '../../domain/models/Book';

abstract class BookUseCase {
  abstract create(book: Book): Promise<boolean>;
  abstract fetch(): Promise<Book[]>;
  abstract update(book: Book, id: string): Promise<boolean>;
  abstract deleteBook(id: string): Promise<boolean>;
}

export default BookUseCase;
