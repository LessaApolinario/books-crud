import Author from '../../domain/models/Author';

abstract class AuthorUseCase {
  abstract create(author: Author): Promise<boolean>;
  abstract fetch(): Promise<Author[]>;
  abstract update(author: Author, id: string): Promise<boolean>;
  abstract remove(id: string): Promise<boolean>;
}

export default AuthorUseCase;
