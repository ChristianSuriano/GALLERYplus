class ControllerAlbums {
  #albums;

  ControllerPhotos() {
    this.#albums = JSON.parse(localStorage.getItem("albums")) || [];
  }

  createAlbum(title, description, date) {
    let album;
    if (this.#albums.filter((album) => album.title === title).length === 0) {
      album = new ModelAlbum(title, description, date);
      this.#albums.push(album);
      this.saveLocalStorage();
    }
    return album;
  }

  read(id) {
    return this.#albums.find((album) => album.id === id);
  }

  delete() {
    this.retrieveLocalStorage();
    this.#albums = this.#albums.filter((id) => newAlbum.id !== id);
    this.saveLocalStorage();
  }

  addImage(id, image) {
    //id: float, image: Photo
    this.#albums[id].listPhotos.push(image);
    this.saveLocalStorage();
  }

  deleteImage(id) {
    this.#albums[id].listPhotos = this.#albums[id].listPhotos.filter(
      (id) => id !== this.#albums[id].id
    );
    this.saveLocalStorage();
  }

  update(id, title, description, date) {
    const albumToUpdate = this.#albums.find((album) => album.id === id);

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

  saveLocalStorage() {
    if (this.#albums.length === 0) {
      localStorage.removeItem("albums");
    } else {
      localStorage.setItem("albums", JSON.stringify(this.#albums));
    }
  }
}
