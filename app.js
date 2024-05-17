class Metadati {
  constructor(color, genre, author, location, tag) {
    this.color = color;
    this.genre = genre;
    this.author = author;
    this.location = location;
    this.tag = tag;
  }
}

class Photos {
  constructor(metaDatas = []) {
    this.idPhoto = Math.random();
    this.metaDatas = metaDatas;
  }

  addMetaData(metaData) {
    this.metaDatas = [...this.metaDatas, metaData];
  }
}

class User {
  constructor(username, password, idPhotos = []) {
    this.idUser = Math.random();
    this.username = username;
    this.password = password;
    this.idPhotos = idPhotos;
  }

  addPhoto(photo) {
    this.idPhotos = [...this.idPhotos, photo];
  }
}

// Crea un'istanza di Metadati
const metaData1 = new Metadati(
  "red",
  "landscape",
  "John Doe",
  "NYC",
  "vacation"
);
const photo1 = new Photos();
photo1.addMetaData(metaData1);

const user1 = new User("pippo", "pippo1");
user1.addPhoto(photo1);

// Verifica il contenuto
console.log(user1);

console.log(photo1);
//:(
