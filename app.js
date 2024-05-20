class App {
  constructor() {
    this.usersController = new ControllerUsers();
  }

  // Esempio di utilizzo
  run() {
    const user1 = this.usersController.create(
      "John",
      "Doe",
      "john_doe",
      "password123",
      "john@example.com"
    );
    console.log("User created:", user1);

    const user2 = this.usersController.create(
      "Jane",
      "Smith",
      "jane_smith",
      "password456",
      "jane@example.com"
    );
    console.log("User created:", user2);

    const userToUpdate = this.usersController.read(user1.id);
    if (userToUpdate) {
      this.usersController.update(
        userToUpdate.id,
        "Updated",
        "Name",
        "updated_username",
        "updated_password",
        "updated@example.com"
      );
      console.log("User updated:", this.usersController.read(userToUpdate.id));
    }

    const userToDelete = this.usersController.read(user2.id);
    if (userToDelete) {
      this.usersController.delete(userToDelete.id);
      console.log("User deleted:", userToDelete);
    }

    const loggedInUser = this.usersController.get(
      "updated_username",
      "updated_password"
    );
    console.log("Logged in user:", loggedInUser);
  }
}
// Esegui l'applicazione
const myApp = new App();
myApp.run();
