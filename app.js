import ControllerUsers from "./controllers/ControllerUsers";
import ControllerAlbums from "./controllers/ControllerAlbums";
import ControllerPhoto from "./controllers/ControllerPhotos";

class App {
  #usersController;
  #albumController;
  #photoController;
  constructor() {
    this.#usersController = new ControllerUsers();
    this.#albumController = new ControllerAlbums();
    this.#photoController = new ControllerPhoto();
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
  }
}

// Eseguire l'applicazione
const myApp = new App();
myApp.run();
