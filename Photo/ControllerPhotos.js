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
    const photoToUpdate = this.photos.find((photo) => photo.id === id);
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

    if (tag !== undefined) {
      photoToUpdate.tag = tag;
    }

    this.saveLocalStorage();
    return photoToUpdate; // Restituiamo la foto aggiornata
  }

  delete(id) {
    const index = this.photos.findIndex((photo) => photo.id === id);
    if (index === -1) {
      return null; // Restituisci null se la foto non è stata trovata
    }

    this.photos.splice(index, 1); // Rimuoviamo la foto dall'array
    this.saveLocalStorage();
  }

  // Metodo per salvare la lista delle foto in localStorage
  saveLocalStorage() {
    localStorage.setItem("photos", JSON.stringify(this.photos));
  }

  // Metodo per caricare la lista delle foto da localStorage
  loadLocalStorage() {
    return JSON.parse(localStorage.getItem("photos"));
  }
}
