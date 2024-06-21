import { ModelAlbum } from "./ModelAlbum";

class ControllerAlbums {
  constructor() {
    this.albums = this.loadLocalStorage() || [];
  }

  // Carica la lista degli album da localStorage
  loadLocalStorage() {
    return JSON.parse(localStorage.getItem("albums"));
  }

  // Salva la lista degli album in localStorage
  saveLocalStorage() {
    localStorage.setItem("albums", JSON.stringify(this.albums));
  }

  // Crea un nuovo album
  createAlbum(title, description, date) {
    let album = this.albums.find((album) => album.title === title);
    if (!album) {
      album = new ModelAlbum(title, description, date);
      this.albums.push(album);
      this.saveLocalStorage();
    }
    return album;
  }

  // Legge un album specifico
  read(id) {
    return this.albums.find((album) => album.id === id);
  }

  // Cancella un album
  delete(id) {
    this.albums = this.albums.filter((album) => album.id !== id);
    this.saveLocalStorage();
  }

  // Aggiunge una foto a un album
  addImage(id, image) {
    const album = this.albums.find((album) => album.id === id);
    if (album) {
      album.listPhotos.push(image);
      this.saveLocalStorage();
    }
  }

  // Cancella una foto da un album
  deleteImage(albumId, imageId) {
    const albumIndex = this.albums.findIndex((album) => album.id === albumId);
    if (albumIndex !== -1) {
      this.albums[albumIndex].listPhotos = this.albums[
        albumIndex
      ].listPhotos.filter((photo) => photo.id !== imageId);
      this.saveLocalStorage();
    }
  }

  // Aggiorna le informazioni di un album
  update(id, title, description, date) {
    const albumToUpdate = this.albums.find((album) => album.id === id);

    if (!albumToUpdate) {
      return null; // Restituisci null se l'album non è stato trovato
    }

    if (title !== undefined) {
      albumToUpdate.title = title;
    }

    if (description !== undefined) {
      albumToUpdate.description = description;
    }

    if (date !== undefined) {
      albumToUpdate.date = date;
    }

    this.saveLocalStorage();
    return albumToUpdate;
  }
}

export { ControllerAlbums };
