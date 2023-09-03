import { DTO } from '../types/DTO';

class BookAuthor {
  private _book_id?: string;
  private _author_id?: string;

  constructor() {
    this._book_id = this._author_id = '';
  }

  static fromJSON(json: DTO): BookAuthor {
    const bookAuthor = new BookAuthor();
    bookAuthor._book_id = String(json['book_id']);
    bookAuthor._author_id = String(json['author_id']);
    return bookAuthor;
  }

  toJSON(): DTO {
    const dto: DTO = {};
    dto['book_id'] = this._book_id;
    dto['author_id'] = this._author_id;
    return dto;
  }

  get book_id() {
    return this._book_id;
  }

  get author_id() {
    return this._author_id;
  }
}

export default BookAuthor;
