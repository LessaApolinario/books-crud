import { uuid } from 'uuidv4';

import { DTO } from '../types/DTO';

class Book {
  private _id?: string;
  private _title?: string;
  private _pages?: number;
  private _released?: Date;
  private _created_at?: Date;
  private _updated_at?: Date;

  constructor() {
    if (!this._id) {
      this._id = uuid();
    }

    this._title = '';
    this._pages = 0;
    this._released = undefined;
    this._created_at = undefined;
    this._updated_at = undefined;
  }

  static fromJSON(json: DTO): Book {
    const book = new Book();
    book._id = String(json['id']);
    book._title = String(json['title']);
    book._pages = Number(json['pages']);
    book._released = new Date(json['released'] as string);
    book._created_at = new Date(json['created_at'] as string);
    book._updated_at = new Date(json['updated_at'] as string);
    return book;
  }

  toJSON(): DTO {
    const dto: DTO = {};
    dto['id'] = this._id;
    dto['title'] = this._title;
    dto['pages'] = this._pages;
    dto['released'] = this._released;
    dto['created_at'] = this._created_at;
    dto['updated_at'] = this._updated_at;
    return dto;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get pages() {
    return this._pages;
  }

  get released() {
    return this._released;
  }

  get createdAt() {
    return this._created_at;
  }

  get updatedAt() {
    return this._updated_at;
  }
}

export default Book;
