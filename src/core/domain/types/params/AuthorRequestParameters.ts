import Author from '../../models/Author';

interface AuthorRequestParameters {
  author?: Author;
  id?: string;
}

export { AuthorRequestParameters };
