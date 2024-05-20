class Album {
  constructor(title, description, listPhotos, date) {
    this.id = Math.random();
    this.title = title;
    this.description = description;
    this.listPhotos = listPhotos;
    this.date = date;
  }
  filterByTag(tag) {
    return this.listPhotos.filter((photo) => photo.tag === tag);
  }

  filterByAuthor(author) {
    return this.listPhotos.filter((photo) => photo.author === author);
  }
}
