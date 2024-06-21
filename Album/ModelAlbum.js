import { Generate } from "../utils/Generate";

class ModelAlbum {
  constructor(title, description, date) {
    this.id = Generate.generateUUID();
    this.listPhotos = [];
    this.title = title;
    this.description = description;
    this.date = date;
  }
}

export { ModelAlbum };
