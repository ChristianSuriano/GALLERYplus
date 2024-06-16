document.addEventListener("DOMContentLoaded", function () {
  const controller = new ControllerAlbums();
  const albumForm = document.getElementById("albumForm");
  const imageForm = document.getElementById("imageForm");
  const albumsList = document.getElementById("albumsList");

  // funzione per visualizzare l'album
  function displayAlbums() {
    albumsList.innerHTML = "";
    controller.albums.forEach((album) => {
      const albumElement = document.createElement("div");
      albumElement.innerHTML = `
                  <h3>${album.title}</h3>
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
                  <hr>
              `;
      albumsList.appendChild(albumElement);
    });
  }

  // visualizzazione iniziale degli album
  displayAlbums();

  // invio del form per creare un album
  albumForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const newAlbum = controller.createAlbum(title, description, date);
    displayAlbums();
    albumForm.reset();
  });

  // invio del form per aggiungere un'immagine a un album
  imageForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const albumId = document.getElementById("albumId").value;
    const image = document.getElementById("image").value;
    controller.addImage(albumId, image);
    displayAlbums();
    imageForm.reset();
  });
});

//localStorage.clear();
