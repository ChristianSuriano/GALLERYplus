import ModelAlbum from "../models/ModelAlbum";

export default class ControllerAlbums {
    #albums = [];

    createAlbum(title, description, date) {
        const newAlbum = new ModelAlbum(title, description, date);
        this.#albums.push(newAlbum);
        return newAlbum;
    }

    delete() {
        this.#albums = this.#albums.filter(id => newAlbum.id !== id);
    }

    addImage(id, image) { //id: float, image: Photo
        this.#albums[id].listPhotos.push(image);
    }

    deleteImage(id) {
        this.#albums[id].listPhotos = this.#albums[id].listPhotos.filter((id) => id !== this.#albums[id].id);
    }

    update(id, title, description, date) {
        const albumToUpdate = this.#albums.find(album => album.id === id);

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

        return albumToUpdate;
    }
}