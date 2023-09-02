import AuthorUseCase from '../../core/interfaces/usecases/AuthorUseCase';
import AuthorService from '../../core/services/AuthorService';
import AuthorPostgresRepository from '../../infra/postgres/author';

class DIContainer {
  static getAuthorUseCase(): AuthorUseCase {
    return new AuthorService(new AuthorPostgresRepository());
  }
}

export default DIContainer;
