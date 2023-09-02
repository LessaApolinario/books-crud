import Author from '../domain/models/Author';
import AuthorAdapter from '../interfaces/adapters/AuthorAdapter';
import AuthorUseCase from '../interfaces/usecases/AuthorUseCase';

class AuthorService extends AuthorUseCase {
  private adapter: AuthorAdapter;

  constructor(adapter: AuthorAdapter) {
    super();
    this.adapter = adapter;
  }

  create(author: Author): Promise<boolean> {
    return this.adapter.create(author);
  }

  fetch(): Promise<Author[]> {
    return this.adapter.fetch();
  }

  update(author: Author, id: string): Promise<boolean> {
    return this.adapter.update(author, id);
  }

  deleteAuthor(id: string): Promise<boolean> {
    return this.adapter.deleteAuthor(id);
  }
}

export default AuthorService;
