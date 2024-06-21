class ControllerUsers {
  #users = [];

  create(name, surname, username, password, email) {
    let user;
    if (
      this.#users.filter((element) => element.username === username).length ===
      0
    ) {
      user = new ModelUser(name, surname, username, password, email);
      this.#users.push(user);
      this.saveLocalStorage();
    }
    return user;
  }

  read(id) {
    return this.#users.find((user) => user.id === id);
  }

  update(id, name, surname, username, password, email) {
    const userToUpdate = this.#users.find((user) => user.id === id);
    if (userToUpdate) {
      userToUpdate.name = name;
      userToUpdate.surname = surname;
      userToUpdate.username = username;
      userToUpdate.password = password;
      userToUpdate.email = email;
      this.saveLocalStorage();
      return userToUpdate;
    } else return null; // Restituiamo null se l'utente non è stato trovato
  }

  delete(id) {
    this.#users = this.#users.filter((user) => user.id !== id);
    this.saveLocalStorage();
  }

  get(username, password) {
    return this.#users.find(
      (user) => user.username === username && user.password === password
    );
  }

  saveLocalStorage() {
    localStorage.setItem("accounts", JSON.stringify(this.#users));
  }
}
