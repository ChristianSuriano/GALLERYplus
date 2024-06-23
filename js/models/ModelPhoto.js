import {generateUUID} from "../utils/Generate.js";

class ModelPhoto {
  constructor(title, url, description) {
    this.id = generateUUID();
    this.title = title;
    this.url = url;
    this.description = description;
  }
}

export {ModelPhoto};