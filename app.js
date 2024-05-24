const ControllerUsers = require("./controllers/ControllerUsers");
const ControllerAlbums = require("./controllers/ControllerAlbums");
const ControllerPhotos = require("./controllers/ControllerPhotos");
const Generate = require("./utils/Generate");

class App {
  #usersController;
  #albumController;
  #photoController;

  constructor() {
    this.#usersController = new ControllerUsers();
    this.#albumController = new ControllerAlbums();
    this.#photoController = new ControllerPhotos();
  }

  // Esempio di utilizzo
  run() {
    // Creare 2 utenti
    const user1 = this.#usersController.create(
      "John",
      "Doe",
      "john_doe",
      "password123",
      "john@example.com"
    );
    console.log("Utente creato:", user1);

    const user2 = this.#usersController.create(
      "Jane",
      "Smith",
      "jane_smith",
      "password456",
      "jane@example.com"
    );
    console.log("Utente creato:", user2);

    // Esempio di lettura utente per ID
    const userToUpdate = this.#usersController.read(user1.id);

    // Aggiornare i dati di un utente
    if (userToUpdate) {
      this.#usersController.update(
        userToUpdate.id,
        "NomeAggiornato",
        "CognomeAggiornato",
        "username_aggiornato",
        "password_aggiornata",
        "aggiornato@example.com"
      );
      console.log("Utente aggiornato:", userToUpdate);
    }

    // Eliminare un utente
    if (user2) {
      this.#usersController.delete(user2.id);
      console.log("Utente eliminato:", user2);
    }

    // Esempio di login di un utente
    const loggedInUser = this.#usersController.get(
      "username_aggiornato",
      "password_aggiornata"
    );
    console.log("Utente loggato:", loggedInUser);

    //Creare due foto per ogni utente
    let photoSea = this.#photoController.create(
      "mare in tempesta",
      "descrizione della foto",
      user1,
      "url1",
      "paesaggio"
    );
    console.log("Photo created:", photoSea);

    let photoCat = this.#photoController.create(
      "gatto nero",
      "descrizione della foto",
      user1,
      "url2",
      "animale"
    );
    console.log("Photo created:", photoCat);

    let photoFamily = this.#photoController.create(
      "foto famiglia",
      "descrizione della foto",
      user2,
      "url3",
      "famiglia"
    );
    console.log("Photo created:", photoFamily);

    let photoFamily2 = this.#photoController.create(
      "foto famiglia",
      "descrizione della foto",
      user2,
      "url4",
      "famiglia"
    );
    console.log("Photo created:", photoFamily2);

    //Creare un album per ogni utente
    let albumUser1 = this.#albumController.createAlbum(
      "natura",
      "un album sulla natura e sugli animali",
      [photoSea, photoCat],
      "24/05/24"
    );
    console.log("Album created:", albumUser1);

    let albumUser2 = this.#albumController.createAlbum(
      "family",
      "un album sulla famiglia",
      [photoFamily1, photoFamily2],
      "20/05/24"
    );
    console.log("Album created:", albumUser2);

    //Modificare il titolo dell'album
  }
}

// Eseguire l'applicazione
const myApp = new App();
myApp.run();
