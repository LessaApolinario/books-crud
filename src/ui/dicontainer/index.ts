import AuthorUseCase from '../../core/interfaces/usecases/AuthorUseCase';
import BookAuthorUseCase from '../../core/interfaces/usecases/BookAuthorUseCase';
import BookUseCase from '../../core/interfaces/usecases/BookUseCase';
import GenreUseCase from '../../core/interfaces/usecases/GenreUseCase';
import AuthorService from '../../core/services/AuthorService';
import BookAuthorService from '../../core/services/BookAuthorService';
import BookService from '../../core/services/BookService';
import GenreService from '../../core/services/GenreService';
import AuthorPostgresRepository from '../../infra/postgres/author';
import BookPostgresRepository from '../../infra/postgres/book';
import BookAuthorPostgresRepository from '../../infra/postgres/book_author';
import GenrePostgresRepository from '../../infra/postgres/genre';

class DIContainer {
  static getAuthorUseCase(): AuthorUseCase {
    return new AuthorService(new AuthorPostgresRepository());
  }

  static getGenreUseCase(): GenreUseCase {
    return new GenreService(new GenrePostgresRepository());
  }

  static getBookUseCase(): BookUseCase {
    return new BookService(new BookPostgresRepository());
  }

  static getBookAuthorUseCase(): BookAuthorUseCase {
    return new BookAuthorService(new BookAuthorPostgresRepository());
  }
}

export default DIContainer;
