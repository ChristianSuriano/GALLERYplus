class ControllerAlbums {
    #albums = [];

    createAlbum (title, description, date){
        const newAlbum = new ModelAlbum(title, description, date);
        this.#albums.push(newAlbum);
        return newAlbum;
    }

    delete(){
        this.#albums = this.#albums.filter(id => newAlbum.id !== id);
    }

    addImage(id, image){ //id: float, image: Photo
        this.#albums[id].listPhotos.push(image);    
    }

    deleteImage(id){
        this.#albums[id].listPhotos = this.#albums[id].listPhotos.filter((id) => id !== this.#albums[id].id);
    }
}