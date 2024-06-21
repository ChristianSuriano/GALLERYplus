import { ControllerUsers } from "./User/ControllerUsers";
const controllerUsers = new ControllerUsers();

class Register {
  #usersController;

  constructor() {
    this.#usersController = controllerUsers;
  }

  // Funzione per la registrazione dell'account
  registerAccount() {
    const signupForm = document.getElementById("signup-form");
    const name = signupForm.name.value;
    const surname = signupForm.surname.value;
    const username = signupForm.username.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    // Verifica se i campi sono compilati correttamente
    if (
      name !== "" &&
      surname !== "" &&
      username !== "" &&
      email !== "" &&
      password !== ""
    ) {
      // Creazione di un nuovo utente
      const user = this.#usersController.create(
        name,
        surname,
        username,
        password,
        email
      );

      if (user) {
        // Stampa un messaggio di conferma
        document.getElementById(
          "register-message"
        ).innerHTML = `Account ${user.username} created successfully`;
        console.log("account creato");
        // Reindirizza l'utente alla pagina di login
        window.location.href = "login.html";
      } else {
        document.getElementById("register-message").innerHTML =
          "Account already exists";
        console.log("account esistente");
      }
    } else {
      // Stampa un messaggio di errore
      document.getElementById("register-message").innerHTML =
        "Please fill in all fields";
    }
  }

  // Punto di ingresso, viene avviato come se fosse il main
  run() {
    console.log("app avviata");

    // Ascolto del pulsante di registrazione
    document.getElementById("signup-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.registerAccount();
    });
  }
}

// Eseguire l'applicazione
const myApp = new Register();
myApp.run();