import ModelUser from "../models/ModelUser";

export default class ControllerUsers {
  #users = [];

  create(name, surname, username, password, email) {
    const user = new ModelUser(name, surname, username, password, email);
    this.#users.push(user);
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
      return userToUpdate;
    } else return null; // Restituiamo null se l'utente non è stato trovato
  }

  delete(id) {
    this.#users = this.#users.filter((user) => user.id !== id);
  }

  get(username, password) {
    return this.#users.find(
        (user) => user.username === username && user.password === password
    );
  }
}
