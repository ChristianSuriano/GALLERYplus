document.addEventListener("DOMContentLoaded", function () {
  const albumForm = document.getElementById("albumForm");
  const imageForm = document.getElementById("imageForm");
  const albumsList = document.getElementById("albumsList");

  // Funzione per visualizzare gli album
  function displayAlbums() {
    albumsList.innerHTML = "";

    // Recupera l'array di album dal local storage
    let albums = JSON.parse(localStorage.getItem("albums")) || [];

    albums.forEach((album) => {
      const albumElement = document.createElement("div");
      albumElement.innerHTML = `
        <h3>
          <span class="album-title" contenteditable="true">${album.title}</span>
          <button class="save-title">Save</button>
        </h3>
        <p>Description: <span class="album-description" contenteditable="true">${album.description}</span></p>
        <p>Date: <input type="date" class="album-date" value="${album.date}"></p>
        <p>ID: ${album.id}</p>
        <h4>Photos:</h4>
        <ul>
          ${album.listPhotos
            .map(
              (photo) =>
                `<li><img src="${photo}" style="max-width: 100px;"></li>`
            )
            .join("")}
        </ul>
        <button class="remove-button" data-id="${album.id}">Cancella</button>
      `;
      albumsList.appendChild(albumElement);

      // Event listener per salvare il nuovo titolo, descrizione e data
      const titleElement = albumElement.querySelector(".album-title");
      const descriptionElement = albumElement.querySelector(".album-description");
      const dateElement = albumElement.querySelector(".album-date");
      const saveButton = albumElement.querySelector(".save-title");

      saveButton.addEventListener("click", function () {
        const newTitle = titleElement.innerText;
        const newDescription = descriptionElement.innerText;
        const newDate = dateElement.value;

        // Trova l'album nell'array e aggiorna le sue proprietà
        const albumIndex = albums.findIndex((a) => a.id === album.id);
        if (albumIndex !== -1) {
          albums[albumIndex].title = newTitle;
          albums[albumIndex].description = newDescription;
          albums[albumIndex].date = newDate;
        }

        // Salva l'array aggiornato nel local storage
        localStorage.setItem("albums", JSON.stringify(albums));
        displayAlbums();
      });

      // Event listener per eliminare l'album
      const removeButton = albumElement.querySelector(".remove-button");
      removeButton.addEventListener("click", function () {
        // Filtra l'array per rimuovere l'album con l'ID specificato
        albums = albums.filter((a) => a.id !== album.id);

        // Salva l'array aggiornato nel local storage
        localStorage.setItem("albums", JSON.stringify(albums));
        displayAlbums();
      });
    });
  }

  // Visualizzazione iniziale degli album
  displayAlbums();

  // Invio del form per creare un album
  albumForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;

    // Recupera l'array di album dal local storage
    let albums = JSON.parse(localStorage.getItem("albums")) || [];

    // Crea un nuovo album
    const newAlbum = {
      id: Date.now(), // Usa un timestamp come ID
      title: title,
      description: description,
      date: date,
      listPhotos: []
    };

    // Aggiungi il nuovo album all'array
    albums.push(newAlbum);

    // Salva l'array aggiornato nel local storage
    localStorage.setItem("albums", JSON.stringify(albums));
    displayAlbums();
    albumForm.reset();
  });

  // Invio del form per aggiungere un'immagine a un album
  imageForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const albumId = parseInt(document.getElementById("albumId").value);
    const image = document.getElementById("image").value;

    // Recupera l'array di album dal local storage
    let albums = JSON.parse(localStorage.getItem("albums")) || [];

    // Trova l'album e aggiungi l'immagine
    const albumIndex = albums.findIndex((a) => a.id === albumId);
    if (albumIndex !== -1) {
      albums[albumIndex].listPhotos.push(image);
    }

    // Salva l'array aggiornato nel local storage
    localStorage.setItem("albums", JSON.stringify(albums));
    displayAlbums();
    imageForm.reset();
  });
});
