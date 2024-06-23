import {ControllerUsers} from "../controllers/ControllerUsers.js";

const controllerUser = new ControllerUsers();


document.addEventListener("DOMContentLoaded", function () {
    renderNavbar();
});



function renderNavbar() {
    // Check if 'loggedUser' is present in localStorage
    const loggedUser = controllerUser.getLoggedUser();

    // Create navbar HTML
    let navbarHtml = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Gallery+</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Homepage</a>
            </li>`;

    if (loggedUser) {
        navbarHtml += `
            <li class="nav-item">
              <a class="nav-link" href="profile.html">Profile</a>
            </li>`;
    }

    navbarHtml += `
          </ul>
          <ul class="navbar-nav ms-auto">`;

    if (loggedUser) {
        navbarHtml += `
            <li class="nav-item">
              <a class="nav-link" href="#" id="logout-link">Logout</a>
            </li>`;
    } else {
        navbarHtml += `
            <li class="nav-item">
              <a class="nav-link" href="register.html">Sign Up</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="login.html">Login</a>
            </li>`;
    }

    navbarHtml += `
          </ul>
        </div>
      </div>
    </nav>`;

    // Insert the navbar into the DOM
    document.getElementById('navbar-container').innerHTML = navbarHtml;

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