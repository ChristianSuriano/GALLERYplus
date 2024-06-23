import {ModelUser} from "../models/ModelUser.js";

class ControllerUsers {
  #users;

  constructor() {
    this.#users = JSON.parse(localStorage.getItem("accounts")) || [];
  }

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

  loginUser(username, password) {

    const loggedUser = this.#users.find((user) => {
      return user.username === username && user.password === password;
    });

    if (loggedUser) {
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser.id));
    }
  }

  getLoggedUser() {
    const loggedUserId = JSON.parse(localStorage.getItem("loggedUser"));
    return this.read(loggedUserId);
  }


  saveLocalStorage() {
    localStorage.setItem("accounts", JSON.stringify(this.#users));
  }

  logout() {
    localStorage.removeItem('loggedUser');
  }
}

export {ControllerUsers};