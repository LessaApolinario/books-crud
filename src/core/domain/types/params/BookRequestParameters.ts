import Book from '../../models/Book';

interface BookRequestParameters {
  book?: Book;
  id?: string;
}

export { BookRequestParameters };
