class Photo {
  constructor(title, description, author, url, tag) {
    this.id = Math.random();
    this.title = title;
    this.description = description;
    this.author = author;
    this.url = url;
    this.tag = tag;
  }
}
