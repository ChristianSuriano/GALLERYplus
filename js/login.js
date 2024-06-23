import {ControllerUsers} from './controllers/ControllerUsers.js';

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

                this.#usersController.loginUser(username, password);

                const loggedUser = this.#usersController.getLoggedUser();

                // Verificare se la lista degli account esiste
                if (loggedUser) {
                    document.getElementById("login-message").innerHTML = `Account ${loggedUser.username} logged in successfully`;
                    setTimeout(function() {
                        window.location.href = "profile.html";
                    }, 3000);
                } else {
                    document.getElementById("login-message").innerHTML = "Username or password is wrong";
                }

            });
    }

    run() {
        console.log("Login started");
        this.initLogin();
    }
}

// Eseguire l'applicazione
const myApp = new Login();
myApp.run();
