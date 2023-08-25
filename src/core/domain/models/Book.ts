import { uuid } from 'uuidv4';

import Author from './Author';
import Genre from './Genre';

class Book {
  private _id?: string;
  private _title?: string;
  private _authors?: Author[];
  private _genres?: Genre[];
  private _pages?: number;
  private _released?: Date;
  private _createdAt?: Date;
  private _updatedAt?: Date;

  constructor() {
    if (!this._id) {
      this._id = uuid();
    }

    this._title = '';
    this._authors = undefined;
    this._genres = undefined;
    this._pages = 0;
    this._released = undefined;
    this._createdAt = undefined;
    this._updatedAt = undefined;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  get authors() {
    return this._authors;
  }

  get genres() {
    return this._genres;
  }

  get pages() {
    return this._pages;
  }

  get released() {
    return this._released;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }
}

export default Book;
