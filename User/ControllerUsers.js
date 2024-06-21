import { ModelUser } from './ModelUser';

class ControllerUsers {
  #users = [];

  constructor() {
    this.#users = this.loadLocalStorage() || [];
  }

  // Carica la lista degli utenti da localStorage
  loadLocalStorage() {
    return JSON.parse(localStorage.getItem("accounts"));
  }

  // Salva la lista degli utenti in localStorage
  saveLocalStorage() {
    localStorage.setItem("accounts", JSON.stringify(this.#users));
  }

  // Crea un nuovo utente
  create(name, surname, username, password, email) {
    let user;
    if (!this.#users.find((element) => element.username === username)) {
      user = new ModelUser(name, surname, username, password, email);
      this.#users.push(user);
      this.saveLocalStorage();
    }
    return user;
  }

  // Legge un utente specifico
  read(id) {
    return this.#users.find((user) => user.id === id);
  }

  // Aggiorna le informazioni di un utente
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

  // Cancella un utente
  delete(id) {
    this.#users = this.#users.filter((user) => user.id !== id);
    this.saveLocalStorage();
  }

  // Verifica le credenziali di un utente
  get(username, password) {
    return this.#users.find((user) => user.username === username && user.password === password);
  }
}

export { ControllerUsers };