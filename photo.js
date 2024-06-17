document.addEventListener("DOMContentLoaded", () => {
  const controllerPhotos = new ControllerPhotos();
  const imageInput = document.getElementById("imageInput");
  const tagInput = document.getElementById("tagInput");
  const dateInput = document.getElementById("dateInput");
  const descriptionInput = document.getElementById("descriptionInput");
  const uploadButton = document.getElementById("uploadButton");
  const albumContainer = document.getElementById("albumContainer");

  uploadButton.addEventListener("click", () => {
    const files = imageInput.files;
    const tag = tagInput.value.trim();
    const date = dateInput.value;
    const description = descriptionInput.value.trim();

    if (files.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    if (!tag) {
      alert("Please enter a tag.");
      return;
    }

    if (!date) {
      alert("Please select a date.");
      return;
    }

    if (!description) {
      alert("Please enter a description.");
      return;
    }

    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const photo = controllerPhotos.create(
            "Default Title",
            e.target.result,
            description,
            tag
          );
          addImageToAlbum(photo.id, e.target.result, tag, date, description);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select a valid image file.");
      }
    });

    resetInputs();
  });

  function addImageToAlbum(photoId, imageSrc, tag, date, description) {
    let tagContainer = document.querySelector(`.album-tag[data-tag="${tag}"]`);

    if (!tagContainer) {
      tagContainer = document.createElement("div");
      tagContainer.classList.add("album-tag");
      tagContainer.setAttribute("data-tag", tag);

      const tagTitle = document.createElement("h3");
      tagTitle.textContent = tag;
      tagContainer.appendChild(tagTitle);

      albumContainer.appendChild(tagContainer);
    }

    const photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-info");
    photoContainer.setAttribute("data-id", photoId);

    const img = document.createElement("img");
    img.src = imageSrc;

    const photoDate = document.createElement("p");
    photoDate.textContent = `Date: ${date}`;

    const photoDescription = document.createElement("p");
    photoDescription.innerHTML = `Description: <span contenteditable="true">${description}</span> <button class="save-description">Save</button>`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-photo");

    photoContainer.appendChild(img);
    photoContainer.appendChild(photoDate);
    photoContainer.appendChild(photoDescription);
    photoContainer.appendChild(deleteButton);

    tagContainer.appendChild(photoContainer);

    // Event listener per salvare la nuova descrizione
    const saveButton = photoDescription.querySelector(".save-description");
    saveButton.addEventListener("click", function () {
      const newDescription = photoDescription.querySelector("span").innerText;
      controllerPhotos.update(
        photoId,
        undefined,
        undefined,
        newDescription,
        undefined
      );
    });

    // Event listener per eliminare la foto
    deleteButton.addEventListener("click", function () {
      controllerPhotos.delete(photoId);
      photoContainer.remove();
    });
  }

  function resetInputs() {
    imageInput.value = "";
    tagInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
  }
});
