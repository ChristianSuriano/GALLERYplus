class Album {
  constructor(title, description, listPhotos, date) {
    this.id = Math.random();
    this.title = title;
    this.description = description;
    this.listPhotos = listPhotos;
    this.date = date;
  }
}
