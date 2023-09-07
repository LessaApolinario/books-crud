import { DTO } from '../types/DTO';

class BookGenre {
  private _book_id?: string;
  private _genre_id?: string;

  constructor() {
    this._book_id = this._genre_id = '';
  }

  static fromJSON(json: DTO): BookGenre {
    const bookGenre = new BookGenre();
    bookGenre._book_id = String(json['book_id']);
    bookGenre._genre_id = String(json['genre_id']);
    return bookGenre;
  }

  toJSON(): DTO {
    const dto: DTO = {};
    dto['book_id'] = this._book_id;
    dto['genre_id'] = this._genre_id;
    return dto;
  }

  get book_id() {
    return this._book_id;
  }

  get genre_id() {
    return this._genre_id;
  }
}

export default BookGenre;
