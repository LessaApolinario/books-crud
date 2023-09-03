import AuthorUseCase from '../../core/interfaces/usecases/AuthorUseCase';
import GenreUseCase from '../../core/interfaces/usecases/GenreUseCase';
import AuthorService from '../../core/services/AuthorService';
import GenreService from '../../core/services/GenreService';
import AuthorPostgresRepository from '../../infra/postgres/author';
import GenrePostgresRepository from '../../infra/postgres/genre';

class DIContainer {
  static getAuthorUseCase(): AuthorUseCase {
    return new AuthorService(new AuthorPostgresRepository());
  }

  static getGenreUseCase(): GenreUseCase {
    return new GenreService(new GenrePostgresRepository());
  }
}

export default DIContainer;
