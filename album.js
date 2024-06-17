document.addEventListener("DOMContentLoaded", function () {
  const controller = new ControllerAlbums();
  const albumForm = document.getElementById("albumForm");
  const imageForm = document.getElementById("imageForm");
  const albumsList = document.getElementById("albumsList");

  // Funzione per visualizzare gli album
  function displayAlbums() {
    albumsList.innerHTML = "";
    controller.albums.forEach((album) => {
      const albumElement = document.createElement("div");
      albumElement.innerHTML = `
        <h3>
          <span class="album-title" contenteditable="true">${album.title}</span>
          <button class="save-title">Save</button>
        </h3>
        <p>Description: ${album.description}</p>
        <p>Date: ${album.date}</p>
        <p>ID: ${album.id}</p>
        <h4>Photos:</h4>
        <ul>
          ${album.listPhotos
            .map(
              (photo) =>
                `<li><img src="${photo}" style="max-width: 200px;"></li>`
            )
            .join("")}
        </ul>
      `;
      albumsList.appendChild(albumElement);

      // Event listener per salvare il nuovo titolo
      const titleElement = albumElement.querySelector(".album-title");
      const saveButton = albumElement.querySelector(".save-title");

      saveButton.addEventListener("click", function () {
        const newTitle = titleElement.innerText;
        controller.update(album.id, newTitle);
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
    controller.createAlbum(title, description, date);
    displayAlbums();
    albumForm.reset();
  });

  // Invio del form per aggiungere un'immagine a un album
  imageForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const albumId = document.getElementById("albumId").value;
    const image = document.getElementById("image").value;
    controller.addImage(albumId, image);
    displayAlbums();
    imageForm.reset();
  });
});
