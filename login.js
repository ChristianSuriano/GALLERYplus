class Login {
  #usersController;

  constructor() {
    this.#usersController = new ControllerUsers();
  }

  initLogin() {
    document
      .getElementById("login-form")
      .addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        // Recuperare la lista degli account dal localStorage
        let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

        // Verificare se la lista degli account esiste
        if (!accounts) {
          document.getElementById("login-message").innerHTML =
            "No accounts found";
          return;
        }

        // Filtrare la lista degli account per trovare un account con lo stesso username
        let accountInLocalStorage = accounts.filter(
          (value) => value.username === username
        );

        // Verificare se l'account esiste
        if (!accountInLocalStorage.length) {
          document.getElementById("login-message").innerHTML =
            "Invalid username or password";
          return;
        }

        // Verificare se le credenziali sono corrette
        const user = accountInLocalStorage[0];
        if (user.password !== password) {
          document.getElementById("login-message").innerHTML =
            "Invalid username or password";
          return;
        }

        // Stampa un messaggio di conferma
        document.getElementById(
          "login-message"
        ).innerHTML = `Account ${user.username} logged in successfully`;
        console.log("account loggato");
      });
  }

  run() {
    console.log("app avviata");

    // Ascolto il pulsante di login
    document.getElementById("login-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.initLogin();
    });
  }
}

// Eseguire l'applicazione
const myApp = new Login();
myApp.run();
