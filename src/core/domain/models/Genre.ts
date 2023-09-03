import { uuid } from 'uuidv4';
import { DTO } from '../types/DTO';

class Genre {
  private _id?: string;
  private _name?: string;
  private _created_at?: Date;
  private _updated_at?: Date;

  constructor() {
    if (!this._id) {
      this._id = uuid();
    }

    this._name = '';
    this._created_at = undefined;
    this._updated_at = undefined;
  }

  static fromJSON(json: DTO): Genre {
    const genre = new Genre();
    genre._id = String(json['id']);
    genre._name = String(json['name']);
    genre._created_at = new Date(json['created_at'] as string);
    genre._updated_at = new Date(json['updated_at'] as string);
    return genre;
  }

  toJSON(): DTO {
    const dto: DTO = {};
    dto['id'] = this._id;
    dto['name'] = this._name;
    dto['created_at'] = this._created_at;
    dto['updated_at'] = this._updated_at;
    return dto;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get created_at() {
    return this._created_at;
  }

  get updated_at() {
    return this._updated_at;
  }
}

export default Genre;
