import { ControllerUsers } from "./User/ControllerUsers";
const controllerUsers = new ControllerUsers();

class Login {
  #usersController;

  constructor() {
    this.#usersController = controllerUsers;
  }

  initLogin() {
    const loginForm = document.getElementById("login-form");
    const loginMessage = document.getElementById("login-message");
    const loginUsername = document.getElementById("login-username");
    const loginPassword = document.getElementById("login-password");

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const username = loginUsername.value;
      const password = loginPassword.value;

      const accounts = this.#usersController.getAccounts();

      if (!accounts.length) {
        loginMessage.innerHTML = "No accounts found";
        return;
      }

      const accountInLocalStorage = accounts.find(
        (account) => account.username === username
      );

      if (!accountInLocalStorage) {
        loginMessage.innerHTML = "Username o password non validi";
        return;
      }

      if (accountInLocalStorage.password !== password) {
        loginMessage.innerHTML = "Username o password non validi";
        return;
      }

      loginMessage.innerHTML = `Account ${accountInLocalStorage.username} logged in successfully`;
      console.log("account loggato con successo!");
      window.location.href = "profile.html";
    });
  }

  run() {
    console.log("app avviata");
    this.initLogin();
  }
}

// Eseguire l'applicazione
const myApp = new Login();
myApp.run();
