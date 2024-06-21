import { ControllerAlbums } from "../Album/ControllerAlbums";
const controller = new ControllerAlbums();

function writeAlbumList(idNode, albums) {
  const nodeElement = document.getElementById(idNode);
  nodeElement.innerHTML = "";

  albums.forEach((album) => {
    const albumElement = document.createElement("div");
    albumElement.innerHTML = `
      <h3>
        <span class="album-title" contenteditable="true">${album.title}</span>
        <button class="save-title">Save</button>
      </h3>
      <p>Description: <span class="album-description" contenteditable="true">${
        album.description
      }</span></p>
      <p>Date: <input type="date" class="album-date" value="${album.date}"></p>
      <p>ID: ${album.id}</p>
      <h4>Photos:</h4>
      <ul>
        ${album.listPhotos
          .map(
            (photo) => `<li><img src="${photo}" style="max-width: 100px;"></li>`
          )
          .join("")}
      </ul>
      <button class="remove-button">Cancella</button>
    `;
    nodeElement.appendChild(albumElement);

    // Event listener per salvare il nuovo titolo, descrizione e data
    const titleElement = albumElement.querySelector(".album-title");
    const descriptionElement = albumElement.querySelector(".album-description");
    const dateElement = albumElement.querySelector(".album-date");
    const saveButton = albumElement.querySelector(".save-title");

    saveButton.addEventListener("click", () => {
      const newTitle = titleElement.innerText;
      const newDescription = descriptionElement.innerText;
      const newDate = dateElement.value;
      controller.update(album.id, newTitle, newDescription, newDate);
      displayAlbums("album-list", controller.albums);
    });

    const removeButton = albumElement.querySelector(".remove-button");
    removeButton.addEventListener("click", () => {
      const albumId = parseInt(removeButton.getAttribute("data-id"));
      removeButton.setAttribute("");
      controller.delete(albumId);
      nodeElement.removeChild(albumElement); // Rimuove l'elemento dall'interfaccia
      controller.update(albumElement);
    });
  });
}

function displayAlbums(idNode, albums) {
  writeAlbumList(idNode, albums);
}

export { writeAlbumList, displayAlbums };
