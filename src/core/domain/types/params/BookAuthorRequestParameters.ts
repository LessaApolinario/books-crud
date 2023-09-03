import BookAuthor from '../../models/BookAuthor';

interface BookAuthorRequestParameters {
  book_author?: BookAuthor;
  book_id?: string;
  author_id?: string;
}

export { BookAuthorRequestParameters };
