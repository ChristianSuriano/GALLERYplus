import Generate from './utils/Generate.js';
export default class ModelAlbum {
  constructor(title, description, date) {
    this.id = Generate.generateUUID();
    this.listPhotos = [];
    this.title = title;
    this.description = description;
    this.date = date;
  }
}
