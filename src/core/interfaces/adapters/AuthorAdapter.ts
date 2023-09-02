import Author from '../../domain/models/Author';

abstract class AuthorAdapter {
  abstract create(author: Author): Promise<boolean>;
  abstract fetch(): Promise<Author[]>;
  abstract update(author: Author, id: string): Promise<boolean>;
  abstract deleteAuthor(id: string): Promise<boolean>;
}

export default AuthorAdapter;
