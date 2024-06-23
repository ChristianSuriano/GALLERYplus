import {ModelPhoto} from "../models/ModelPhoto.js";

class ControllerPhotos {
  #user;
  #photos;

  constructor(user) {
    this.#user = user;
    this.#photos = user.photos;
  }

  create(title, description, url) {
    let photo = new ModelPhoto(title, url, description);
    this.#photos.push(photo);

    return photo;
  }

  read(id) {
    return this.#photos.find((photo) => photo.id === id);
  }

  update(id, title, url, description) {
    const photoToUpdate = this.#photos.find((photo) => photo.id === id);
    if (!photoToUpdate) {
      return null; // Restituisci null se la foto non è stata trovata
    }

    // Aggiorniamo le proprietà della foto solo se sono state fornite nuove informazioni
    if (title !== undefined) {
      photoToUpdate.title = title;
    }

    if (url !== undefined) {
      photoToUpdate.url = url;
    }

    if (description !== undefined) {
      photoToUpdate.description = description;
    }

    return photoToUpdate; // Restituiamo la foto aggiornata
  }

  delete(id) {
    const index = this.#photos.findIndex((photo) => photo.id === id);
    if (index === -1) {
      return null; // Restituisci null se la foto non è stata trovata
    }
    this.#photos.splice(index, 1); // Rimuoviamo la foto dall'array
  }


}

export {ControllerPhotos};