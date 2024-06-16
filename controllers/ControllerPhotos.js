class ControllerPhotos {
  constructor() {
    this.photos = this.loadLocalStorage() || []; // Inizializza la lista delle foto caricandola da localStorage se presente
  }

  create(title, url, description, tag) {
    let photo;
    if (this.photos.filter((photo) => photo.url === url).length === 0) {
      photo = new ModelPhoto(title, url, description, tag);
      this.photos.push(photo);
      this.saveLocalStorage();
    }
    return photo;
  }

  read(id) {
    return this.photos.find((photo) => photo.id === id);
  }

  update(id, title, url, description, tag) {
    // Cerchiamo la foto da aggiornare in base all'id
    const photoToUpdate = this.photos.find((photo) => photo.id === id);
    this.saveLocalStorage();
    // Se la foto non è stata trovata, restituiamo null
    if (!photoToUpdate) {
      return null;
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

    if (tag !== undefined) {
      photoToUpdate.tag = tag;
    }
    this.saveLocalStorage();
    // Restituiamo la foto aggiornata
    return photoToUpdate;
  }

  delete(id) {
    const index = this.photos.findIndex((photo) => photo.id === id);

    // Se la foto non è stata trovata, restituiamo null
    if (index === -1) {
      return null;
    }

    // Rimuoviamo la foto dall'array
    this.photos.splice(index, 1);
    this.saveLocalStorage();
  }

  // Metodo per salvare la lista degli album in localStorage
  saveLocalStorage() {
    localStorage.setItem("photos", JSON.stringify(this.photos));
  }

  // Metodo per caricare la lista degli album da localStorage
  loadLocalStorage() {
    return JSON.parse(localStorage.getItem("photos"));
  }
}
