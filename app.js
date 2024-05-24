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
    console.log("User created:", user1);

    const user2 = this.#usersController.create(
      "Jane",
      "Smith",
      "jane_smith",
      "password456",
      "jane@example.com"
    );
    console.log("User created:", user2);

    // Esempio di lettura utente per ID
    const userToUpdate = this.#usersController.read(user1.id);

    // Aggiorna i dati di un utente
    if (userToUpdate) {
      this.#usersController.update(
        userToUpdate.id,
        "Updated",
        "Name",
        "updated_username",
        "updated_password",
        "updated@example.com"
      );
      console.log("User updated:", userToUpdate);
    }

    if (user2) {
      this.#usersController.delete(user2.id);
      console.log("User deleted:", user2);
    }

    const loggedInUser = this.#usersController.get(
      "updated_username",
      "updated_password"
    );
    console.log("Logged in user:", loggedInUser);
  }
}
// Esegui l'applicazione
const myApp = new App();
myApp.run();
