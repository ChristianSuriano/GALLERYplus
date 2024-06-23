import {ControllerUsers} from "./controllers/ControllerUsers.js";
import {ControllerPhotos} from "./controllers/ControllerPhotos.js";

const controllerUser = new ControllerUsers();
const loggedUser = controllerUser.getLoggedUser();
const controllerPhotos = new ControllerPhotos(loggedUser);

document.addEventListener('DOMContentLoaded', function () {
  // Aggiungi event listener al form per gestire l'invio
  document.getElementById('addPhotoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previeni il comportamento predefinito di invio del form

    // Ottieni i valori dai campi del form
    const title = document.getElementById('photoTitle').value;
    const description = document.getElementById('photoDesc').value;
    const url = document.getElementById('photoUrl').value; // Assume che sia selezionata solo una foto

    // Prendiamo l'utente loggato
    controllerPhotos.create(title, description, url);

    controllerUser.saveLocalStorage();
    window.location.reload();

  });

  renderPhotos();
  editPhoto();

});



function renderPhotos() {
  const photoList = loggedUser.photos;
  const container = document.getElementById('photoContainer');
  container.innerHTML = ''; // Pulisci il contenuto del container

  let row;
  photoList.forEach((photo, index) => {
    if (index === 0 || index % 4 === 0) {
      row = document.createElement('div');
      row.className = 'row mt-3';
      container.appendChild(row);
    }

    const col = document.createElement('div');
    col.className = 'col-md-3 position-relative';

    const img = document.createElement('img');
    img.src = photo.url;
    img.alt = photo.description;
    img.className = 'img-fluid';

    // Create overlay div
    const overlay = document.createElement('div');
    overlay.className = 'position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center bg-dark bg-opacity-50 text-white';
    overlay.style.transition = 'opacity 0.3s';
    overlay.style.opacity = '0';

    // Title and description
    const title = document.createElement('h5');
    title.textContent = photo.title;
    const description = document.createElement('p');
    description.textContent = photo.description;

    // Edit and delete buttons
    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group mt-2';

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm btn-warning edit-photo-btn';
    editBtn.textContent = 'Modifica';
    editBtn.setAttribute('data-bs-toggle', 'modal');
    editBtn.setAttribute('data-bs-target', '#editPhotoModal');
    editBtn.setAttribute('data-photo-id', photo.id);
    // Add edit functionality here

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-danger';
    deleteBtn.textContent = 'Elimina';
    // Add delete functionality here

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    overlay.appendChild(title);
    overlay.appendChild(description);
    overlay.appendChild(btnGroup);

    // Append img and overlay to col
    col.appendChild(img);
    col.appendChild(overlay);
    row.appendChild(col);

    // Event listeners for hover effect
    col.addEventListener('mouseover', () => {
      overlay.style.opacity = '1';
    });

    col.addEventListener('mouseout', () => {
      overlay.style.opacity = '0';
    });

    deleteBtn.addEventListener('click', () => {
      controllerPhotos.delete(photo.id);
      controllerUser.saveLocalStorage();
      window.location.reload();
    });

    editBtn.addEventListener('click', () => {
      fillEditForm(photo);
    });
  });

}


function editPhoto() {
  // Gestisce l'evento di invio del modulo di modifica foto
  const editPhotoForm = document.getElementById('editPhotoForm');
  editPhotoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(editPhotoForm);

    // Implementa la logica per salvare le modifiche della foto (ad esempio, chiamata API)
    controllerPhotos.update(formData.get('id'), formData.get('title'), formData.get('url'), formData.get('desc'));
    controllerUser.saveLocalStorage();
    window.location.reload();
  });
}

// Funzione per riempire il modulo di modifica foto con i dati della foto selezionata
function fillEditForm(photo) {
  document.getElementById('editPhotoId').value = photo.id;
  document.getElementById('editPhotoTitle').value = photo.title;
  document.getElementById('editPhotoDesc').value = photo.description;
  document.getElementById('editPhotoUrl').value = photo.url;
}

