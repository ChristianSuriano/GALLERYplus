import { ModelPhoto } from "./ModelPhoto";

class ControllerPhotos {
  constructor() {
    this.photos = this.loadLocalStorage() || [];
  }

  // Carica la lista delle foto da localStorage
  loadLocalStorage() {
    return JSON.parse(localStorage.getItem("photos"));
  }

  // Salva la lista delle foto in localStorage
  saveLocalStorage() {
    localStorage.setItem("photos", JSON.stringify(this.photos));
  }

  // Crea una nuova foto
  create(title, url, description, tag) {
    let photo;
    if (!this.photos.find((photo) => photo.url === url)) {
      photo = new ModelPhoto(title, url, description, tag);
      this.photos.push(photo);
      this.saveLocalStorage();
    }
    return photo;
  }

  // Legge una foto specifica
  read(id) {
    return this.photos.find((photo) => photo.id === id);
  }

  // Aggiorna le informazioni di una foto
  update(id, title, url, description, tag) {
    const photoToUpdate = this.photos.find((photo) => photo.id === id);

    if (!photoToUpdate) {
      return null; // Restituisci null se la foto non è stata trovata
    }

    if (title !== undefined) {
      photoToUpdate.title = title;
    }

    if (url !== undefined) {
      photoToUpdate.url = url;
    }

    if (description !== undefined) {
      photoToUpdate.description = description;
    }

    if (tag !== undefined) {
      photoToUpdate.tag = tag;
    }

    this.saveLocalStorage();
    return photoToUpdate; // Restituiamo la foto aggiornata
  }

  // Cancella una foto
  delete(id) {
    const index = this.photos.findIndex((photo) => photo.id === id);
    if (index === -1) {
      return null; // Restituisci null se la foto non è stata trovata
    }

    this.photos.splice(index, 1); // Rimuoviamo la foto dall'array
    this.saveLocalStorage();
  }
}

export { ControllerPhotos };