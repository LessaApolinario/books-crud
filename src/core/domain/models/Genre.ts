import { uuid } from 'uuidv4';

class Genre {
  private _id?: string;
  private _name?: string;
  private _createdAt?: Date;
  private _updatedAt?: Date;

  constructor() {
    if (!this._id) {
      this._id = uuid();
    }

    this._name = '';
    this._createdAt = undefined;
    this._updatedAt = undefined;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }
}

export default Genre;
