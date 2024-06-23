import {ControllerUsers} from "../controllers/ControllerUsers.js";

const controllerUser = new ControllerUsers();

document.addEventListener("DOMContentLoaded", function () {
    renderLandingPage();
    startBackgroundAnimation();
});

function renderLandingPage() {
    // Check if 'loggedUser' is present in localStorage
    const loggedUser = controllerUser.getLoggedUser();

    // Create landing page HTML
    let landingPageHtml = `
    <section class="text-center p-5">
      <div class="container">
        <div id="logo" class="mb-3">
          Gallery
          <a href="profile.html">
            <img style="vertical-align:middle" src="../static/img/logo.png" alt="Logo" id="img" height="50">
          </a>
        </div>
        <p id="motto" class="mb-4">
          Esprimiti attraverso le immagini, ogni scatto racconta la tua storia!
        </p>
        <nav>`;

    if (loggedUser) {
        landingPageHtml += `
          <a class="btn btn-primary me-2" href="profile.html">Vai alla galleria</a>
          <a class="btn btn-secondary" href="#" id="logout-link">Logout</a>`;
    } else {
        landingPageHtml += `
          <a class="btn btn-outline-primary me-2 ref" href="register.html">Sign Up</a>
          <a class="btn btn-outline-secondary ref" href="login.html">Login</a>`;
    }

    landingPageHtml += `
        </nav>
      </div>
    </section>`;

    // Insert the landing page content into the DOM
    document.getElementById('landing-page-container').innerHTML = landingPageHtml;

    // Add logout functionality
    if (loggedUser) {
        document.getElementById('logout-link').addEventListener('click', function (e) {
            e.preventDefault();
            // Perform logout operations (like clearing localStorage)
            controllerUser.logout();
            // Reload the page or redirect to the login page
            window.location.href = 'login.html';
        });
    }
}

function startBackgroundAnimation() {
    const backgrounds = document.querySelectorAll('.background');
    let index = 0;

    // Mostra la prima immagine all'avvio della pagina
    backgrounds[index].classList.add('active');

    setInterval(() => {
        // Rimuovi la classe 'active' da tutte le immagini di sfondo
        backgrounds.forEach(bg => bg.classList.remove('active'));
        // Passa alla successiva immagine di sfondo
        index = (index + 1) % backgrounds.length;
        // Aggiungi la classe 'active' alla nuova immagine di sfondo
        backgrounds[index].classList.add('active');
    }, 8000); // Cambia immagine ogni 8 secondi (8000 millisecondi)
}