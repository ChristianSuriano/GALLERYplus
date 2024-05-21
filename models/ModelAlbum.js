class ModelAlbum {
  constructor(title, description, date) {
    this.id = Math.random();
    this.listPhotos = [];
    this.title = title;
    this.description = description;
    this.date = date;
  }
}
