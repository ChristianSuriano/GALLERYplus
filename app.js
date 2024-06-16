class App {
  #usersController;
  #albumController;
  #photoController;

  constructor() {
    this.#usersController = new ControllerUsers();
    this.#albumController = new ControllerAlbums();
    this.#photoController = new ControllerPhotos();
  }

  // Creazione di un nuovo album
  addAlbum() {
    const formAlbum = document.getElementById("album-form");
    const titleInput = document.querySelector("#title");
    const descriptionInput = document.querySelector("#description");
    const dateInput = document.querySelector("#date");

    const title = titleInput.value;
    const description = descriptionInput.value;
    const date = dateInput.value;

    // Recuperare la lista degli album dal localStorage
    let albums = JSON.parse(localStorage.getItem("albums")) || [];

    // Verifica se i campi sono compilati correttamente
    if (title !== "" && description !== "" && date !== "") {
      // Creazione di un nuovo album
      const album = this.#albumController.createAlbum(title, description, date);

      if (album) {
        // Aggiungi il nuovo album alla lista degli album
        albums.push(album);

        // Salvare la lista aggiornata nel localStorage
        localStorage.setItem("albums", JSON.stringify(albums));

        // Stampa un messaggio di conferma
        document.getElementById(
          "add-album-message"
        ).innerHTML = `Album ${album.title} created successfully`;
        console.log("Album creato");
      } else {
        document.getElementById("add-album-message").innerHTML =
          "Album already exists";
        console.log("Album esistente");
      }
    }
  }

  // Punto di ingresso, viene avviato come se fosse il main
  run() {
    console.log("app avviata");

    // Ascolto del pulsante di registrazione
    /*
    document.getElementById("signup-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.registerAccount();
    });*/

    // Ascolto il pulsante di login
    /*
    document.getElementById("login-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.initLogin();
    });*/

    /*
    // Ascolto il pulsante di aggiunta album
    document.getElementById("album-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.addAlbum();
    });*/
  }

  /*
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
      [photoFamily, photoFamily2],
      "20/05/24"
    );
    console.log("Album created:", albumUser2);*/
}

// Eseguire l'applicazione
const myApp = new App();
myApp.run();
