const ModelPhoto = require("../models/ModelPhoto");

class ControllerPhotos {
    #photos = [];

    create(title, url, description, tag) {
        const photo = new ModelPhoto(title, url, description, tag);
        this.#photos.push(photo);
        return photo;
    }

    read(id) {
        return this.#photos.find((photo) => photo.id === id);
    }

    update(id, title, url, description, tag) {
        // Cerchiamo la foto da aggiornare in base all'id
        const photoToUpdate = this.#photos.find(photo => photo.id === id);

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

        // Restituiamo la foto aggiornata
        return photoToUpdate;
    }


    delete(id) {
        const index = this.#photos.findIndex(photo => photo.id === id);

        if (index !== -1) {
            this.#photos.splice(index, 1);
        }
    }
}

module.exports = ControllerPhotos;